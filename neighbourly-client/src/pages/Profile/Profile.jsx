import { MdAppRegistration } from "react-icons/md";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import moment from "moment";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
  const { user, loading, setLoading } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [lastLoginAt, setLastLoginAt] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");

      // Time conversion with moment.js
      if (user.metadata) {
        setCreatedAt(moment(user.metadata.creationTime).format("LLL"));
        setLastLoginAt(moment(user.metadata.lastSignInTime).format("LLL"));
      } else {
        setCreatedAt("Unknown");
        setLastLoginAt("Unknown");
      }
    }
  }, [user]);

  // Handle image file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true); // Start loading

    try {
      let uploadedPhotoURL = photoURL;

      // If a new image is selected, upload it and get the URL
      if (selectedImage) {
        uploadedPhotoURL = await imageUpload(selectedImage);
        setPhotoURL(uploadedPhotoURL);
      }

      // Update the user's profile in Firebase
      await updateProfile(user, {
        displayName,
        photoURL: uploadedPhotoURL,
      });

      setSuccess("Profile updated successfully! 🥳");
      toast.success("Profile updated successfully! 🥳");
    } catch (err) {
      setError(err.message);
      toast.error(`Update failed: ${err.message}`);
    } finally {
      setLoading(false); // End loading
    }
  };

  if (!user) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <>
        <Helmet>
          <title>{`Update Profile | ${user.displayName || "User"}`}</title>
        </Helmet>
        <div className=" py-12 flex flex-wrap items-center justify-center ">
          <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg transform duration-200 ease-in-out ">
            {/* Cover Img */}
            <div className="h-32 overflow-hidden">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ibb.co/18VK7Cv/cover.png"
                alt="Cover"
              />
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center px-5 -mt-12">
              <img
                className="h-32 w-32 bg-white p-2 rounded-full"
                src={user?.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Profile Information */}
            <div>
              <div className="text-center px-14 mt-4">
                <h2 className="text-gray-800 text-xl md:text-2xl font-bold">
                  {user?.displayName}
                </h2>
              </div>

              <div className="ml-6">
                <div className="flex items-center p-4 bg-white rounded">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-200 p-1 rounded">
                    <MdAppRegistration size={20} />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className=" font-semibold">Account Created:</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm  ml-2">
                        {createdAt}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded">
                  <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 p-1 rounded">
                    <TbSquareRoundedArrowDownFilled size={20} />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="font-semibold">Last Login:</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm  ml-2">
                        {lastLoginAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Update Form */}
              <div className="w-full p-8">
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  {/* Display Name Input */}
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="input input-bordered input-md w-full"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-1"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email Address (Read-Only) */}
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      defaultValue={user?.email}
                      placeholder=" "
                      className="input input-bordered input-md w-full max-w-xs"
                      readOnly
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-1"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Profile Picture Upload */}
                  <div className="flex items-center justify-center w-full mt-8">
                    <input
                      type="file"
                      name="image"
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs my-2"
                      accept="image/*"
                      onChange={handleFileChange} // Handle file selection
                    />
                  </div>

                  {/* Save Changes Button */}
                  <div className="flex justify-evenly items-center my-12 text-gray-300 gap-4">
                    <button
                      disabled={loading}
                      type="submit"
                      className={`relative inline-block px-6 py-3 font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <span className="absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute inset-0 rounded-xl bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      </span>
                      <div className="relative z-10 flex items-center space-x-2 rounded-xl">
                        <span>
                          {loading ? (
                            <CgSpinnerTwoAlt className="animate-spin m-auto" />
                          ) : (
                            "Save Changes"
                          )}
                        </span>
                        <IoCheckmarkDoneOutline size={25} />
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>
                  </div>
                </form>

                {/* Display Success or Error Messages */}
                {error && (
                  <div className="text-red-500 mt-4 text-center">{error}</div>
                )}
                {success && (
                  <div className="text-green-500 mt-4 text-center">
                    {success}
                  </div>
                )}
              </div>

              <hr className="mt-6" />

              {/* Additional Content (if any) */}
              <div className="flex bg-gray-50">
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Profile;
