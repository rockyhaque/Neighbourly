import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import "./UpdateRoleModal.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const UpdateRoleModal = ({ user, isOpen, setIsOpen, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [selectedRole, setSelectedRole] = useState(user.role || "resident");
  const [animateModal, setAnimateModal] = useState(false);

  // Close modal with animation
  const closeModal = () => {
    setAnimateModal(true);
    setTimeout(() => {
      setIsOpen(false);
      setAnimateModal(false);
    }, 300);
  };

  // API call to update role and status
  const updateRoleMutation = useMutation({
    mutationFn: async (newRole) => {
      const { data } = await axiosSecure.patch(`/users/update/${user.email}`, {
        role: newRole,
        status: "Verified", // Status updated to verified
      });
      return data;
    },
    onSuccess: () => {
      toast.success("User role updated successfully!");
      refetch();
      closeModal();
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleUpdate = () => {
    if (!selectedRole) return;
    updateRoleMutation.mutate(selectedRole);
  };

  useEffect(() => {
    if (isOpen) {
      setAnimateModal(false);
    }
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70">
      <div className={`modal-content ${animateModal ? "closing" : "opening"}`}>
        <div className="avatar flex justify-center">
          <div className="ring-sky-300 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src={user?.photo} />
          </div>
        </div>
        <h2 className="text-xl text-center font-semibold my-4">
          {user?.email}
        </h2>
        <p></p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700"></label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gradient-to-r from-purple-100 to-purple-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-700"
          >
            <option value="resident">Resident</option>
            <option value="worker">Worker</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex justify-center space-x-4 pt-4 pb-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-xl bg-white hover:bg-gray-100"
          >
            Close
          </button>
          <button
            onClick={handleUpdate}
            disabled={updateRoleMutation.isLoading}
            className="relative inline-block px-6 py-3 font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"
          >
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center space-x-2 rounded-xl  ">
              <span>
                {updateRoleMutation.isLoading ? "Updating..." : "Update Role"}
              </span>
              <MdOutlineTipsAndUpdates size={25} />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

UpdateRoleModal.propTypes = {
  user: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UpdateRoleModal;
