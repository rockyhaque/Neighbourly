import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const categoryColors = {
  Electrical: {
    bg: "bg-yellow-100/60",
    text: "text-yellow-500",
    dot: "bg-yellow-500",
  },
  Plumbing: {
    bg: "bg-blue-100/60",
    text: "text-blue-500",
    dot: "bg-blue-500",
  },
  Carpentry: {
    bg: "bg-blue-100/60",
    text: "text-blue-200",
    dot: "bg-blue-500",
  },
  Gardening: {
    bg: "bg-green-100/60",
    text: "text-green-500",
    dot: "bg-green-500",
  },
  Housekeeping: {
    bg: "bg-pink-100/60",
    text: "text-pink-500",
    dot: "bg-pink-500",
  },
  Security: {
    bg: "bg-red-100/60",
    text: "text-red-500",
    dot: "bg-red-500",
  },
  HVAC: {
    bg: "bg-teal-100/60",
    text: "text-teal-500",
    dot: "bg-teal-500",
  },
  Waste: {
    bg: "bg-gray-100/60",
    text: "text-gray-500",
    dot: "bg-gray-500",
  },
  Painting: {
    bg: "bg-purple-100/60",
    text: "text-purple-500",
    dot: "bg-purple-500",
  },
  Appliance: {
    bg: "bg-sky-100/60",
    text: "text-sky-500",
    dot: "bg-sky-500",
  },
  Network: {
    bg: "bg-cyan-100/60",
    text: "text-cyan-500",
    dot: "bg-cyan-500",
  },
  Construction: {
    bg: "bg-orange-100/60",
    text: "text-orange-500",
    dot: "bg-orange-500",
  },
  Vehicle: {
    bg: "bg-yellow-100/60",
    text: "text-yellow-500",
    dot: "bg-yellow-500",
  },
};

const ServiceTableRow = ({ service }) => {
  // console.log(service);
  return (
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 font-roboto ">
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-10 h-10 rounded-full"
                referrerPolicy="no-referrer"
                src={service?.worker?.image}
                alt={service?.worker?.name}
              />
              <div>
                <h2 className="font-medium text-gray-800  ">
                  {service?.worker?.name}
                </h2>
                <p className="text-sm font-normal text-gray-600 ">
                  {service?.worker?.email}
                </p>
              </div>
            </div>
          </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
              categoryColors[service?.category]?.bg || "bg-gray-100/60"
            } dark:bg-gray-800`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                categoryColors[service?.category]?.dot || "bg-gray-500"
              }`}
            />
            <h2
              className={`text-sm font-normal ${
                categoryColors[service?.category]?.text || "text-gray-500"
              }`}
            >
              {service?.category}
            </h2>
          </div>
        </td>
        <td className="px-4 py-4 text-sm text-gray-900  whitespace-nowrap">
          {service?.phone}
        </td>
        <td className="px-4 py-4 text-sm text-gray-900  whitespace-nowrap">
          {service?.availability_status}
        </td>

        <td className="px-4 py-4 text-sm ">
          <Link
            to={`/service/${service?._id}`}
            className="flex justify-center items-center"
          >
            <FaExternalLinkAlt
              size={18}
              className="text-gray-800 hover:text-sky-500 hover:scale-105"
            />
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default ServiceTableRow;
