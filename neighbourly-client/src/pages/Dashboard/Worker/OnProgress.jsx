// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "../../../hooks/useAxiosCommon";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import TimeTracker from "./TimeTracker";
// import { useState } from "react";

const OnProgress = () => {
  // const { id: serviceId } = useParams(); // Retrieve service ID from URL
  // const axiosCommon = useAxiosCommon();
  // const [status, setStatus] = useState(false);

  // const { data: service = {}, isLoading } = useQuery({
  //   queryKey: ["serviceStatus", serviceId],
  //   queryFn: async () => {
  //     const { data } = await axiosCommon.get(`/booking/status/${serviceId}`);
  //     return data;
  //   },
  //   onSuccess: (data) => {
  //       console.log(data)
  //     setStatus(data?.booked || false);  // Use the correct field for status (booked or status)
  //   },
  // });

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <SectionHeading heading="On Progress" />
       <TimeTracker />
    </div>
  );
};

export default OnProgress;
