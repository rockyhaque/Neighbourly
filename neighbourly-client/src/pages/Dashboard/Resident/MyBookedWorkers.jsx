import toast from "react-hot-toast";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "./../../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
import EmptyContent from "../../../components/EmptyContent/EmptyContent";

const MyBookedWorkers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-bookings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-bookings/${user?.email}`);
      return data;
    },
  });

  // Delete Mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/booking/${id}`);
      return data;
    },
    onSuccess: async (data) => {
      // console.log(data);
      refetch();
      //   toast.success("Booking Canceled Successfully");
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
        <title>My Bookings</title>
      </Helmet>
      <SectionHeading heading="My Booked Workers" />

      {bookings.length === 0 ? (
        <EmptyContent
          title="I did't book any worker."
          subTitle="To Book go to 'Our Service' section"
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Service Info</th>
                <th>Service Title</th>
                <th>Category</th>
                <th>Phone No</th>
                <th>Cancle</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}

              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={booking?.service?.worker?.image}
                            alt={booking?.service?.worker?.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {booking?.service?.worker?.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {booking?.service?.worker?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booking?.service?.service_title}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {booking?.service?.category}
                    </span>
                  </td>
                  <td>{booking?.service?.phone}</td>
                  <td>
                    <RxCrossCircled
                      onClick={() => handleDelete(booking._id)}
                      size={20}
                      className="hover:text-rose-700 hover:scale-110 cursor-pointer ml-3"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookedWorkers;
