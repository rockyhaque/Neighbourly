import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin3Line } from "react-icons/ri";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import ServiceUpdateModal from "../../../components/Modal/ServiceUpdateModal";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  // Fetch service Data
  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-listings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-listings/${user?.email}`);
      return data;
    },
  });


   // Update Mutation
   const { mutateAsync: updateService } = useMutation({
    mutationFn: async (updatedData) => {
      const { data } = await axiosSecure.put(
        `/service/update/${updatedData._id}`,
        updatedData
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("Service updated successfully!");
      closeModal();
    },
    onError: () => {
      toast.error("Failed to update the service.");
    },
  });

    // Handle service update from the modal
    const handleUpdate = async (updatedService) => {
        try {
          await updateService(updatedService);
        } catch (error) {
          console.error("Error updating service:", error);
        }
      };


  // Delete Mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/service/${id}`);
      return data;
    },
    onSuccess: (data) => {
      // console.log(data);
      refetch();
      toast.success("Service Deleted Successfully");
    },
  });

  // Delete handler with SweetAlert
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA003F",
      cancelButtonColor: "#4B0082",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your service has been deleted.",
            icon: "success",
            confirmButtonColor: "#4B0082",
          });
        } catch (err) {
          // console.log(err);
          Swal.fire(
            "Error!",
            "There was an issue deleting the service.",
            "error"
          );
        }
      }
    });
  };

  // console.log(services);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>My Listings | Neighbourly</title>
      </Helmet>
      <SectionHeading heading="My All Services" />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Category</th>
              <th>Available Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row data */}
            {services.map((service, index) => (
              <tr key={service._id}>
                <td>
                  <p>{index + 1}</p>
                </td>
                <td>{service.service_title}</td>
                <td>{service.category}</td>
                <td>{service.availability_status}</td>
                <td>
                  <div className="">
                    <button onClick={() => openModal(service)}>
                      <BiMessageSquareEdit
                        className="text-gray-700 hover:text-green-500 hover:shadow-2xl hover:shadow-green-400 cursor-pointer"
                        size={25}
                      />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="">
                    <RiDeleteBin3Line
                      className="text-gray-700 hover:text-red-500 cursor-pointer"
                      size={25}
                      onClick={() => handleDelete(service?._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Service Update Modal */}
        {selectedService && (
          <ServiceUpdateModal
            service={selectedService}
            isOpen={isModalOpen}
            onClose={closeModal}
            refetch={refetch}
            handleUpdate={handleUpdate} 
          />
        )}
      </div>
    </>
  );
};

export default MyListings;
