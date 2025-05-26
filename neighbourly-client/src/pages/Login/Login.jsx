import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";
  const { signInWithGoogle, signIn, loading, setLoading, resetPassword } =
    useAuth();

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      setLoading(true);

      // sign in user
      await signIn(email, password);

      navigate(from);
      toast.success("Sign In Successfull!");
    } catch (err) {
      // console.log(err);
      toast.success(err.message);
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    const email = getValues("email");
    if (!email) {
      return toast.error("Please write your email first!");
    }

    try {
      await resetPassword(email);
      toast.success("Please check your email!");
      setLoading(false);
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  // hangle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      navigate("/");
      toast.success("Sign Up Successfull!");
    } catch (err) {
      // console.log(err);
      toast.success(err.message);
    }
  };

  // demo login credentials
  const handleDemoLogin = (role) => {
    let email, password;

    if (role === "admin") {
      email = "admin@neighbourly.bd";
      password = "Admin@2025";
    } else if (role === "resident") {
      email = "resident@neighbourly.bd";
      password = "Resident@2025";
    } else if (role === "worker") {
      email = "worker@neighbourly.bd";
      password = "Worker@2025";
    }

    setValue("email", email);
    setValue("password", password);

    toast.success(
      "This is for demo purpose only. Please click Login to continue."
    );
  };

  return (
    <div>
      <>
        <div className="py-16 min-h-screen">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div
              className="hidden lg:block lg:w-1/2 bg-cover"
              style={{
                backgroundImage:
                  'url("https://i.ibb.co.com/WnzxYz6/max-larochelle-Qz-P1-Gc-DOSC8-unsplash.jpg")',
              }}
            ></div>
            <div className="w-full p-8 lg:w-1/2">
              <div className="flex justify-center items-center mb-4">
                <img src="./logo.png" alt="" className="w-16 h-16" />
              </div>
              <p className="text-xl text-gray-600 text-center">
                Welcome back to Neighbourly!
              </p>

              {/* Google Authentication */}
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 w-full cursor-pointer"
              >
                <div className="px-4 py-3">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold cursor-pointer">
                  Sign in with Google
                </h1>
              </button>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4" />
                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase"
                >
                  or login with email
                </a>
                <span className="border-b w-1/5 lg:w-1/4" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Demo Credentails button */}
                <div className="flex justify-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("admin")}
                    className="text-sm bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded"
                  >
                    Admin Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("resident")}
                    className="text-sm bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                  >
                    Resident Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("worker")}
                    className="text-sm bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded"
                  >
                    Worker Demo
                  </button>
                </div>

                {/* Email Authentication */}

                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 font-semibold text-md mt-1">
                      *Email is required
                    </span>
                  )}
                </div>

                {/* password */}
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    <button
                      onClick={handleResetPassword}
                      href="#"
                      className="text-xs text-gray-500"
                    >
                      Forget Password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type={showPass ? "text" : "password"}
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    {/* Eye Icon */}
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-xl text-gray-600"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? (
                        <IoEyeOffOutline />
                      ) : (
                        <MdOutlineRemoveRedEye />
                      )}
                    </span>
                  </div>
                </div>
                {errors.password?.type === "required" && (
                  <span className="text-red-500 font-semibold text-md mt-2">
                    *Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 font-semibold text-md mt-2">
                    Password Must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 font-semibold text-md mt-2">
                    Password Must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 font-semibold text-md mt-2">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </span>
                )}

                <div className="mt-8">
                  <button
                    disabled={loading}
                    type="submit"
                    className="bg-gradient-to-r from-sky-900 to-zinc-900 hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-900 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  >
                    {loading ? (
                      <CgSpinnerTwoAlt className="animate-spin m-auto" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4" />
                <Link
                  to="/register"
                  className="text-xs text-gray-500 uppercase"
                >
                  or sign up
                </Link>
                <span className="border-b w-1/5 md:w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
