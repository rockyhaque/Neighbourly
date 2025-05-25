import { useEffect, useState } from "react";
import { categories } from "../Categories/CategoriesData";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropTypes from "prop-types";
import "./UpdateRoleModal";

const ServiceUpdateModal = ({ service, isOpen, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service_title: "",
    category: "",
    phone: "",
    address: "",
    sex: "",
    about_me: "",
    experience: "",
    additional_notes: "",
    skills: "",
    shift: "",
    availability_status: "",
    start_time: "",
    end_time: "",
  });

  useEffect(() => {
    if (service) {
      setFormData({
        service_title: service?.service_title || "",
        category: service?.category || "",
        phone: service?.phone || "",
        address: service?.address || "",
        sex: service?.sex || "",
        about_me: service?.about_me || "",
        experience: service?.experience || "",
        additional_notes: service?.additional_notes || "",
        skills: service?.skills || "",
        shift: service?.shift || "",
        availability_status: service?.availability_status || "",
        start_time: service?.start_time || "",
        end_time: service?.end_time || "",
      });
    }
  }, [service]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to update the service
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axiosSecure.put(`/service/update/${service._id}`, formData);
      toast.success("Service updated successfully!");
      refetch();
      onClose(); // Close the modal
    } catch (error) {
      console.error(error);
      toast.error("Failed to update service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="max-w-lg mx-auto w-full space-y-8 p-10 bg-gradient-to-br from-sky-100 via-teal-50 to-sky-100 rounded-xl shadow-xl z-10">
        <h2 className="text-center text-xl font-bold">Update Service</h2>
        <div className="max-h-[70vh] overflow-y-auto">
          <form onSubmit={handleSubmit}>
            {/* Service Title & Category */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Service Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="service_title"
                  value={formData.service_title}
                  onChange={handleChange}
                  required
                  type="text"
                />
              </div>
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Category
                </label>
                <select
                  className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
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

            {/* Phone No & Address */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Phone No
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Sex & Skills */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">Sex</label>
                <select
                  className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Skills
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>

            {/* Shift & Availability Status */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Shift
                </label>
                <select
                  className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                >
                  <option value="">Select Shift</option>
                  <option value="Day Shift">Day Shift</option>
                  <option value="Night Shift">Night Shift</option>
                  <option value="24/7 Special">24/7 Special</option>
                </select>
              </div>
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Available Status
                </label>
                <select
                  className="block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="availability_status"
                  value={formData.availability_status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                  <option value="Vacation On">Vacation On</option>
                </select>
              </div>
            </div>

            {/* Start & End Time */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  Start Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="start_time"
                  type="time"
                  value={formData.start_time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-800 py-2">
                  End Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-10 px-4"
                  name="end_time"
                  type="time"
                  value={formData.end_time}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* About Me, Experience, and Additional Notes */}
            <div className="space-y-4">
              <div>
                <label className="font-semibold text-gray-800 py-2">
                  About Me
                </label>
                <textarea
                  className="w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-20 px-4"
                  name="about_me"
                  value={formData.about_me}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-semibold text-gray-800 py-2">
                  Experience
                </label>
                <textarea
                  className="w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-20 px-4"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-semibold text-gray-800 py-2">
                  Additional Notes
                </label>
                <textarea
                  className="w-full bg-gray-100 bg-opacity-30 text-gray-800 border border-grey-lighter rounded-lg h-20 px-4"
                  name="additional_notes"
                  value={formData.additional_notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="py-0 px-4 text-sm font-medium text-rose-700 bg-rose-100 hover:bg-gray-300 rounded-lg"
                onClick={onClose}
                type="button"
              >
                Cancel
              </button>

              <div className="text-center">
                <button
                  type="submit"
                  className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white border border-sky-200 rounded hover:bg-white group ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    {loading ? "Updating..." : "Update"}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ServiceUpdateModal.propTypes = {
  service: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    service_title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    sex: PropTypes.string,
    about_me: PropTypes.string,
    experience: PropTypes.string,
    additional_notes: PropTypes.string,
    skills: PropTypes.string,
    shift: PropTypes.string,
    availability_status: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ServiceUpdateModal;
