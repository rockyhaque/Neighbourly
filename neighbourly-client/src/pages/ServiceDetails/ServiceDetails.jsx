import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import moment from "moment-timezone";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmBookingModal from "../../components/Modal/ConfirmBookingModal/ConfirmBookingModal";
import useAxiosCommon from "../../hooks/useAxiosCommon";
// import { formatDistanceToNow } from "date-fns";
// import cover from "../../assets/img/hello.png";
import useRole from "./../../hooks/useRole";

const ServiceDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const [isModalOpen, setModalOpen] = useState(false);
  const [role] = useRole();

  const {
    data: service = {},
    isLoading,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/service/${id}`);
      return data;
    },
  });

  const handleConfirmBooking = async (bookingData) => {
    try {
      const response = await axiosCommon.post("/booking", bookingData);
      if (response.data) {
        toast.success("Booking Successful!");
        setModalOpen(false); // Close the modal on successful booking
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Booking failed! Please try again.");
    }
  };

  // const registrationDate = new Date(service?.worker?.since);
  // const relativeTime = formatDistanceToNow(registrationDate, {
  //   addSuffix: true,
  // });

  if (isLoading) return <LoadingSpinner />;

  // console.log(service)

  // const worker = service?.worker;

  return (
    <>
      <div className="z-10">
        <section className="">
          <div
            className="absolute top-0 w-full h-96 bg-center bg-cover"
            style={{
              backgroundImage: 'url("https://i.ibb.co.com/N2wkrfP/hello.png")',
              zIndex: -1,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
        </section>

        <section className="relative py-16 ">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10 md:mt-68 -z-0">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="-mt-10">
                      <div className="avatar">
                        <div className="w-24 rounded-full shadow-xl">
                          <img src={service?.worker?.image} className="" />
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="badge bg-gradient-to-r from-sky-900 to-gray-900 text-gray-200">
                          {service?.availability_status}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 text-center lg:text-right lg:self-center">
                    <div className="py-0 md:py-6 px-3 mt-10 sm:mt-0">
                      <button className="relative px-4 py-2 text-sm text-sky-600 font-semibold rounded-full border border-sky-200 bg-white overflow-hidden transition-transform duration-300 ease-in-out hover:bg-sky-600 hover:border-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                        <div className="text-animation">
                          <span>N</span>
                          <span>e</span>
                          <span>w</span>
                        </div>
                      </button>
                    </div>
                    <div className="mb-4 ">
                      <p>
                        {/* <span>Since</span> <span>{relativeTime}</span> */}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-0">
                      <div className="mr-4 p-3 text-center">
                        <span className="badge animate-pulse shadow-md">
                          {service?.category}
                        </span>
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          {service?.experience}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-0 md:mt-6">
                  <h3 className="text-xl md:text-3xl font-semibold leading-normal  mb-2">
                    {service?.worker?.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-1 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                    {service?.address}
                  </div>
                  <div className="mb-2 ">{service?.worker?.email}</div>
                  <div className="mb-2 ">{service?.phone}</div>
                </div>
                <div className="mt-10 py-5 ">
                  <h2 className="text-center text-xl md:text-2xl font-semibold mb-4">
                    About Me
                  </h2>
                  <div className="flex flex-wrap justify-center text-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="rounded-3xl p-px bg-gradient-to-b from-gray-200 to-transparent">
                        <div className="bg-gray-50  p-10 rounded-[calc(1.5rem-1px)]">
                          <p className=" dark:text-gray-500 text-lg">
                            {service?.about_me}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-evenly mt-4">
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-base md:text-lg my-2 font-semibold">
                        Skills
                      </span>
                      <div className="px-8 py-3 border shadow-xl shadow-neutral-200 rounded-xl inline-block">
                        <span className="text-lg">
                          <ul className="text-start">
                            {service?.skills?.split(",").map((skill, index) => (
                              <li key={index}>&bull; {skill.trim()}</li>
                            ))}
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-base md:text-lg my-2 font-semibold">
                        Aditional Info
                      </span>
                      <div className="px-8 py-3 border shadow-xl shadow-neutral-200 rounded-xl inline-block">
                        <span className="text-lg">
                          <p className="text-start">
                            {service?.additional_notes}
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-base md:text-lg my-2 font-semibold text-center">
                        {service?.shift}
                      </span>

                      <div className="px-8 py-3 border shadow-xl shadow-neutral-200 rounded-xl inline-block">
                        <span className="text-lg">
                          <div className="">
                            <p>
                              From:{" "}
                              {moment(service?.start_time, "HH:mm")
                                .tz("Asia/Dhaka")
                                .format("hh:mm A")}
                            </p>
                            <p>
                              To:{" "}
                              {moment(service?.end_time, "HH:mm")
                                .tz("Asia/Dhaka")
                                .format("hh:mm A")}
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now */}
                  <div className="my-8 text-center">
                    <button
                      type="button"
                      disabled={role === "worker"}
                      onClick={() => setModalOpen(true)}
                      className="relative inline-flex items-center justify-start px-6 md:px-16 py-3 overflow-hidden font-medium transition-all bg-white border border-sky-200 rounded hover:bg-white group disabled:cursor-not-allowed"
                    >
                      <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        Book Now
                      </span>
                    </button>
                  </div>

                  {/* Booking Modal */}
                  {isModalOpen && (
                    <ConfirmBookingModal
                      service={service}
                      worker={service.worker}
                      onConfirm={handleConfirmBooking}
                      onClose={() => setModalOpen(false)} // Close modal function
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetails;
