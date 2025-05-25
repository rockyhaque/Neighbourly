import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { user } = useAuth();
  const [role] = useRole();

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
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-purple-500 to-pink-500 opacity-20"></div>
      <section className="relative pt-20 pb-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-sky-600 p-2 w-72 mx-auto rounded-full flex items-center justify-between mb-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm"
          >
            <span className="font-inter text-sm font-medium text-gray-900 ml-3">
              Explore our service categories
            </span>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="w-8 h-8 rounded-full flex justify-center items-center bg-sky-600 hover:bg-sky-700 transition-colors duration-300"
            >
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center font-manrope font-bold text-5xl text-gray-900 mb-6 md:text-6xl leading-tight"
          >
            Simplify Your Life with
            <span className="text-sky-600 ml-2 relative">
              Neighbourly
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-sky-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl mx-auto text-center text-lg font-normal leading-7 text-gray-600 mb-12"
          >
            Neighbourly connects residents with skilled workers for home
            services, making it easy to hire trusted professionals in your
            community.
          </motion.p>

          {!user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center items-center w-full md:w-1/3 rounded-xl bg-gradient-to-tr from-pink-400 to-blue-500 p-0.5 shadow-lg mb-16 mx-auto"
            >
              <Link
                to="/register"
                className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors duration-300 shadow-md hover:shadow-xl"
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
                className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors duration-300 shadow-md hover:shadow-xl"
              >
                Join as a Worker
              </motion.button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mx-auto max-w-5xl"
          >
            <img
              src="https://i.ibb.co/ZghLbXN/collab-media-VGj-Qg-LN4-B78-unsplash.jpg"
              alt="Dashboard image"
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-200 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
