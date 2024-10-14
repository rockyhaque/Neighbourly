const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// config
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174", "https://neighbourly-beta.web.app"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// send email with nodemailer
const sendEmail = (emailAddress, emailData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_PASS,
    },
  });

  // verify transporter connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  const mailBody = {
    from: `"Neighbourly" <${process.env.TRANSPORTER_EMAIL}>`, // sender address
    to: emailAddress, // list of receivers
    subject: emailData.subject, // Subject line
    html: emailData.message, // html body
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};

// verify jwt middleware
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  // console.log(token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

//--------------------- database connection-----------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@revive.2tkcldw.mongodb.net/?retryWrites=true&w=majority&appName=Revive`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // database and collection
    const database = client.db("neighbourlyDB");
    const userCollection = database.collection("users");
    const serviceCollection = database.collection("services");
    const bookingCollection = database.collection("bookings");

    // verify admin middleware
    const verifyAdmin = async (req, res, next) => {
      const user = req.user;
      const query = { email: user?.email };
      const result = await userCollection.findOne(query);
      if (!result || result?.role !== "admin") {
        return res.status(401).send({ message: "Unauthorized Access" });
      }
      next();
    };

    // verify worker middleware
    const verifyWorker = async (req, res, next) => {
      const user = req.user;
      const query = { email: user?.email };
      const result = await userCollection.findOne(query);
      if (!result || result?.role !== "worker") {
        return res.status(401).send({ message: "Unauthorized Access" });
      }
      next();
    };

    // auth related api
    // app.post("/jwt", async (req, res) => {
    //   const user = req.body;
    //   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    //     expiresIn: "365d",
    //   });
    //   res
    //     .cookie("token", token, {
    //       httpOnly: true,
    //       secure: process.env.NODE_ENV === "production",
    //       sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    //     })
    //     .send({ success: true });
    // });

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
    
      res.cookie("token", token, {
        httpOnly: true, // Prevent access from JavaScript (helps mitigate XSS)
        secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // Allow cross-site cookies in production (for different domains)
        maxAge: 365 * 24 * 60 * 60 * 1000, // Set expiration time to 1 year
      })
      .send({ success: true });
    });
    

    // clear token with logout
    // app.get("/logout", async (req, res) => {
    //   try {
    //     res
    //       .clearCookie("token", {
    //         maxAge: 0,
    //         secure: process.env.NODE_ENV === "production",
    //         sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    //       })
    //       .send({ success: true });
    //     // console.log("Logout successful");
    //   } catch (err) {
    //     res.status(500).send(err);
    //   }
    // });

    app.get("/logout", async (req, res) => {
      try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        }).send({ success: true });
      } catch (err) {
        res.status(500).send(err);
      }
    });
    

    //--------------User APIs--------------

    // save a user data
    app.put("/user", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };

      // check if user already exists in db
      const isExist = await userCollection.findOne(query);
      if (isExist) {
        if (user?.status === "Requested") {
          // if existing user try to change his role
          const result = await userCollection.updateOne(query, {
            $set: { status: user?.status },
          });
          return res.send(result);
        } else {
          // if existing user login again
          return res.send(isExist);
        }
      }

      // save user for the first time
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...user,
          timestamp: Date.now(),
        },
      };
      const result = await userCollection.updateOne(query, updateDoc, options);
      // welcome new user
      sendEmail(user?.email, {
        subject: "Welcome to Neighbourly",
        message: `Reliable Workers, Right at Your Doorstep. Thanks 🌼`,
      });
      res.send(result);
    });

    // get a user info by email for his role and since
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await userCollection.findOne({ email });
      res.send(result);
    });

    // get all users
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    //update role user
    app.patch("/users/update/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email };
      const updateDoc = {
        $set: { ...user, timestamp: Date.now() },
      };
      const result = await userCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    // delete user
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    //--------------Service APIs--------------

    // save a service
    app.post("/service", verifyToken, verifyWorker, async (req, res) => {
      const serviceData = req.body;
      const result = await serviceCollection.insertOne(serviceData);
      res.send(result);
    });

    // get all services
    app.get("/services", async (req, res) => {
      const category = req.query.category;
      let query = {};
      if (category && category !== "null") {
        query = { category };
      }
      const result = await serviceCollection.find(query).toArray();
      res.send(result);
    });

    // get a single Service
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    // get all service for worker who add
    app.get(
      "/my-listings/:email",
      verifyToken,
      verifyWorker,
      async (req, res) => {
        const email = req.params.email;
        let query = { "worker.email": email };
        const result = await serviceCollection.find(query).toArray();
        res.send(result);
      }
    );

    // delete a service
    app.delete("/service/:id", verifyToken, verifyWorker, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });

    // update a service
    app.put(
      "/service/update/:id",
      verifyToken,
      verifyWorker,
      async (req, res) => {
        const id = req.params.id;
        const serviceData = req.body;
        const query = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: serviceData,
        };
        const result = await serviceCollection.updateOne(query, updateDoc);
        res.send(result);
      }
    );

    //--------------Booking APIs--------------

    // save booked service for resident
    app.post("/booking", async (req, res) => {
      const bookingData = req.body;
      // save service booking info
      const result = await bookingCollection.insertOne(bookingData);

      // send email to Resident
      sendEmail(bookingData?.resident?.email, {
        subject: "Booking Successfull",
        message: `You've successfully booked a service through Neighbourly. Worker is on the way toward your address. Thank You 🤝`,
      });

      // send email to worker
      sendEmail(bookingData?.worker?.email, {
        subject: "Yay! You are booked!",
        message: `Hurry Up! Get ready to go ${bookingData.resident.name}'s address. 🥳`,
      });

      res.send(result);
    });

    // get all booking for a resident
    app.get("/my-bookings/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { "resident.email": email };
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    // manage all booking for worker
    app.get(
      "/manage-bookings/:email",
      verifyToken,
      verifyWorker,
      async (req, res) => {
        const email = req.params.email;
        const query = { "service.worker.email": email };
        const result = await bookingCollection.find(query).toArray();
        res.send(result);
      }
    );

    // delete a booking service for
    app.delete("/booking/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });

    //--------------Booking Service APIs--------------

    // update worker booking status
    // app.patch("/service/status/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const status = req.body?.status;
    //   // change worker availablity status
    //   const query = { _id: new ObjectId(id) };
    //   const updateDoc = {
    //     $set: { booked: status },
    //   };
    //   const result = await serviceCollection.updateOne(query, updateDoc);
    //   res.send(result);
    // });
    

    // Get the worker status booked or not
    // app.get("/booking/status/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const service = await bookingCollection.findOne(query);
    //   console.log(service);
    //   res.send(service);
    // });




    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Your server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
