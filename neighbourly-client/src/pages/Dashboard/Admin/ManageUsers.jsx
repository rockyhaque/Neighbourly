import { MdAlignHorizontalRight } from "react-icons/md";
import { TiUserDeleteOutline } from "react-icons/ti";
import { Helmet } from "react-helmet";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { formatDistanceToNow } from "date-fns";
import Swal from "sweetalert2";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useState } from "react";
import UpdateRoleModal from "../../../components/Modal/UpdateRoleModal";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch Users Data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });

  console.log(users);

  // Mutation to delete user
  const deleteUserMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/users/${id}`);
      return data;
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA003F",
      cancelButtonColor: "#4B0082",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserMutation.mutate(userId, {
          onError: () => {
            Swal.fire("Error!", "Failed to delete user.", "error");
          },
          onSuccess: () => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
          },
        });
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Helmet>
        <title>Manage Users | Neighbourly</title>
      </Helmet>
      <SectionHeading heading="All Users" />
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg md:text-2xl font-medium text-gray-800">
            Total Users
          </h2>
          <span className="px-3 mt-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {users.length}
          </span>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                          <MdAlignHorizontalRight />
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Since
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Update Role
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((user) => {
                      const registrationDate = new Date(user?.timestamp);
                      const relativeTime = formatDistanceToNow(
                        registrationDate,
                        { addSuffix: true }
                      );

                      return (
                        <tr key={user?._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div className="flex gap-2">
                                  <div className="avatar">
                                    <div className="w-8 rounded">
                                      <img
                                        src={
                                          user?.photo ||
                                          "https://i.ibb.co/4RRjWy9D/user.png"
                                        }
                                        alt="User Photo"
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white">
                                      {user?.name}
                                    </h2>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                      {user?.role.charAt(0).toUpperCase() +
                                        user?.role.slice(1).toLowerCase()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                user?.status === "Verified"
                                  ? "bg-sky-100/60 dark:bg-gray-800" // sky background for Verified
                                  : user?.status === "Requested"
                                  ? "bg-red-100/60 dark:bg-gray-800" // Red background for Requested
                                  : "bg-gray-100/60 dark:bg-gray-800" // Default background for other statuses
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  user?.status === "Verified"
                                    ? "bg-sky-500" // sky dot for Verified
                                    : user?.status === "Requested"
                                    ? "bg-red-500" // Red dot for Requested
                                    : "bg-gray-500" // Default dot for other statuses
                                }`}
                              />
                              <h2
                                className={`text-sm font-normal ${
                                  user?.status === "Verified"
                                    ? "text-sky-500" // sky text for Verified
                                    : user?.status === "Requested"
                                    ? "text-red-500" // Red text for Requested
                                    : "text-gray-500" // Default text for other statuses
                                }`}
                              >
                                {user?.status}
                              </h2>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {user?.email}
                          </td>
                          <td
                            className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap cursor-pointer tooltip tooltip-right mt-3"
                            data-tip={registrationDate.toDateString()}
                          >
                            <span>{relativeTime}</span>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex justify-center items-center gap-x-6">
                              <button
                                onClick={() => {
                                  setSelectedUser(user);
                                  setIsOpen(true);
                                }}
                              >
                                <BiMessageSquareEdit
                                  className="text-green-400 hover:text-green-500 hover:shadow-2xl hover:shadow-green-400 cursor-pointer"
                                  size={25}
                                />
                              </button>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex justify-center items-center gap-x-6">
                              <TiUserDeleteOutline
                                className="text-rose-400 hover:text-red-500 cursor-pointer"
                                size={25}
                                onClick={() => handleDelete(user?._id)}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Render the modal if a user is selected */}
                {selectedUser && (
                  <UpdateRoleModal
                    user={selectedUser}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    refetch={refetch}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageUsers;
