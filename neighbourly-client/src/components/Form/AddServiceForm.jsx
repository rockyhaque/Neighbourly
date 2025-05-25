import { categories } from "../Categories/CategoriesData";

const AddServiceForm = ({ handleSubmit, loading }) => {
  return (
    <div>
      <div className="font-nunitoSans">
        <div className="max-w-lg mx-auto w-full space-y-8 p-10 bg-gradient-to-br from-sky-100 via-teal-50 to-sky-100 rounded-xl shadow-xl z-10">
          <div className="grid gap-8 grid-cols-1">
            <form onSubmit={handleSubmit}>
              {/* Service Title & Category */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Service Title */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Service Title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="service_title"
                    placeholder=""
                    required
                    type="text"
                  />
                </div>

                {/* Category */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Category
                  </label>
                  <select
                    className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="category"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option value={category.label} key={category.label}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* phone no & address */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Phone No */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Phone No
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="phone"
                    type="tel"
                  />
                </div>

                {/* Address */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="address"
                    type="text"
                  />
                </div>
              </div>

              {/* Sex & Skill */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Sex */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Sex
                  </label>
                  <select
                    className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="sex"
                  >
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Skills */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Skills
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="skills"
                    type="text"
                  />
                </div>
              </div>

              {/* Shift & Available Status */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Shift Options */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Shift
                  </label>
                  <select
                    className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="shift"
                    required
                  >
                    <option value="">Select Shift</option>
                    <option value="Day Shift">Day Shift</option>
                    <option value="Night Shift">Night Shift</option>
                    <option value="24/7 Special">24/7 Special</option>
                  </select>
                </div>

                {/* Available Status */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Available Status
                  </label>
                  <select
                    className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="availability_status"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                    <option value="Vacation On">Vacation On</option>
                  </select>
                </div>
              </div>

              {/* start & end Time */}
              <div className="flex flex-col md:flex-row gap-4 my-3">
                {/* Time Selection */}
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    Start Time
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="startTime"
                    type="time"
                  />
                </div>

                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-800 py-2">
                    End Time
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                    name="endTime"
                    type="time"
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Experience
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="experience"
                  type="text"
                />
              </div>

              {/* About Me */}
              <div className="w-full mb-3 space-y-2 text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  About Me
                </label>
                <textarea
                  className="w-full h-20 bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg py-4 px-4"
                  name="about_me"
                  required
                />
              </div>

              {/* Additional Notes */}
              <div className="w-full mb-3 space-y-2 text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Additional Notes
                </label>
                <textarea
                  className="w-full h-28 bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg py-4 px-4"
                  name="additional_notes"
                  placeholder="Any additional information"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-5 text-center">
                <button
                  type="submit"
                  className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white border border-sky-200 rounded hover:bg-white group ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Save
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServiceForm;
