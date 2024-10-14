import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FloatingCard = ({ name, role, image, className }) => (
  <motion.div
    className={`absolute bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0], // Animation for moving up and down
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse", // Keeps the animation moving up and down
    }}
  >
    <img
      src={image}
      alt={name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div>
      <p className="font-semibold text-sm">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </motion.div>
);

const GradientHero = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  const applyRequest = async () => {
    try {
      const currentUser = {
        email: user?.email,
        role: "worker",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation.");
      } else {
        toast.success("Please wait for admin approval ⌛");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleApplyWorker = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B0082",
      cancelButtonColor: "#FA003F",
      confirmButtonText: "Apply",
    }).then((result) => {
      if (result.isConfirmed) {
        applyRequest();
      }
    });
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Simplify Your Life with{" "}
            <span className="text-sky-600 px-2 rounded">Neighbourly</span> for
            <br className="hidden sm:block" />
            current pace of work
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Neighbourly connects residents with skilled workers for home
            services, making it easy to hire trusted professionals in your
            community.
          </p>

          {!user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center items-center w-full md:w-1/3 rounded-xl bg-gradient-to-tr from-pink-400 to-blue-500 p-0.5 shadow-lg mb-16 mx-auto"
            >
              <Link
                to="/register"
                className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-xl"
              >
                Sign Up / Sign In
              </Link>
            </motion.div>
          )}

          {user && role === "resident" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center items-center w-full md:w-1/3 rounded-xl bg-gradient-to-tr from-pink-400 to-blue-500 p-0.5 shadow-lg mb-16 mx-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyWorker}
                className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-xl"
              >
                Join as a Worker
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Floating Cards */}
        <FloatingCard
          name="Rocky"
          role="Admin"
          image="https://i.ibb.co/ZgNWS2t/profile-01.png"
          className="top-1/4 left-4 sm:left-16 lg:left-24"
        />
        {user ? (
          <FloatingCard
            name={user?.displayName}
            role={role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()}
            image={user?.photoURL}
            className="top-1/2 right-4 sm:right-16 lg:right-24"
          />
        ) : (
          <FloatingCard
            name="Bob Smith"
            role="Worker"
            image="https://i.ibb.co/Zx8HTV2/harry-pappas-xyaui-SBWRFs-unsplash.jpg"
            className="top-1/2 right-4 sm:right-16 lg:right-24"
          />
        )}

        <FloatingCard
          name="Siam"
          role="Worker"
          image="https://i.ibb.co/GR28fHq/compressed-Whats-App-Image-2024-09-19-at-8-40-22-AM-1.jpg"
          className="bottom-1/4 left-3/4 sm:left-2/3 lg:left-64"
        />

        {/* Animated Circles */}
        <motion.div
          className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.5, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  );
};

export default GradientHero;
