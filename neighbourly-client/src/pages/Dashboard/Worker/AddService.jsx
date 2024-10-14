import { Helmet } from "react-helmet";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAuth from "../../../hooks/useAuth";
import AddServiceForm from "../../../components/Form/AddServiceForm";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useRole from "./../../../hooks/useRole";
import useSince from "../../../hooks/useSince";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddService = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [role] = useRole();
  const [since] = useSince();

  const { mutateAsync } = useMutation({
    mutationFn: async (serviceData) => {
      const { data } = await axiosSecure.post("/service", serviceData);
      return data;
    },
    onSuccess: () => {
      toast.success("Service Added Successfully");
      navigate("/dashboard/my-listings");
      setLoading(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const service_title = form.service_title.value;
    const category = form.category.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const sex = form.sex.value;
    const about_me = form.about_me.value;
    const experience = form.experience.value;
    const additional_notes = form.additional_notes.value;
    const skills = form.skills.value;
    const shift = form.shift.value;
    const availability_status = form.availability_status.value;
    const start_time = form.startTime.value;
    const end_time = form.endTime.value;
    const rate = 500;
    const worker = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
      role: role,
      status: "Verified",
      since: since,
    };

    try {
      const serviceData = {
        service_title,
        category,
        phone,
        address,
        sex,
        about_me,
        experience,
        additional_notes,
        skills,
        shift,
        availability_status,
        start_time,
        end_time,
        rate,
        worker,
      };

      // post request to server
      await mutateAsync(serviceData);
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
      setLoading(false);
    }

    // console.log(serviceData);
  };

  return (
    <div>
      <Helmet>
        <title>Add Service | Neighbourly</title>
      </Helmet>
      <SectionHeading heading="Add Service" />

      {/* Form */}
      <AddServiceForm
        handleSubmit={handleSubmit}
        loading={loading}
        user={user}
      />
    </div>
  );
};

export default AddService;
