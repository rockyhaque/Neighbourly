import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import EmptyContent from "../../../components/EmptyContent/EmptyContent";
import moment from "moment";
import { MdOutlineAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-bookings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/manage-bookings/${user?.email}`);
      return data;
    },
  });

  // Delete Mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/booking/${id}`);
      return data;
    },
    onSuccess: async () => {
      // console.log(data);
      refetch();
      //   toast.success("Booking Canceled Successfully");

      // change booked service back to false
      // await axiosSecure.patch(`/service/status/${bookings._id}`, {
      //   status: false,
      // });
    },
  });

  // Handle Delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA003F",
      cancelButtonColor: "#4B0082",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id);
          Swal.fire({
            title: "Canceled!",
            text: "Booking Canceled Successfully",
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

  // console.log(bookings);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Helmet>
        <title>Manage Bookings | Neighbourly</title>
      </Helmet>

      <SectionHeading heading="Manage Bookings" />

      {bookings.length === 0 ? (
        <EmptyContent
          title="No Bookings Available"
          subTitle="Keep Patience. You will be booked soon"
        />
      ) : (
        // <table className="table-auto w-full border-collapse border border-gray-200">
        //   <thead>
        //     <tr className="bg-gray-100">
        //       <th className="border px-4 py-2">#</th>
        //       <th className="border px-4 py-2">Resident Name</th>
        //       <th className="border px-4 py-2">Service</th>
        //       <th className="border px-4 py-2">Booking Date</th>
        //       <th className="border px-4 py-2">Address</th>
        //       <th className="border px-4 py-2">Contact</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {bookings.map((booking, index) => (
        //       <tr key={booking._id}>
        //         <td className="border px-4 py-2">{index + 1}</td>
        //         <td className="border px-4 py-2">{booking.resident?.name}</td>
        //         <td className="border px-4 py-2">
        //           {booking.service?.service_title}
        //         </td>
        //         <td className="border px-4 py-2">
        //           {new Date(booking.date).toLocaleDateString()}
        //         </td>
        //         <td className="border px-4 py-2">
        //           {booking.resident?.address}
        //         </td>
        //         <td className="border px-4 py-2">{booking.resident?.phone}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Resident Info</th>
                <th>Phone</th>
                <th>Booking Data</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row data */}
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={booking?.resident?.photo}
                            alt={booking?.resident?.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {booking?.resident?.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {booking?.resident?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {booking?.resident?.phone}
                    </span>
                  </td>
                  <td>
                    {moment(booking?.bookingDate).format(
                      "MMMM Do YYYY, h:mm A"
                    )}
                  </td>
                  <th>
                    <MdOutlineAutoDelete
                      onClick={() => handleDelete(booking._id)}
                      size={20}
                      className="ml-3 hover:text-rose-500 hover:scale-110 cursor-pointer"
                    />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageBookings;
