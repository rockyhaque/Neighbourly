import { useSearchParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import ContainerLayout from "../../layouts/ContainerLayout";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ServiceTableRow from "../Table/ServiceTableRow";
import { ClimbingBoxLoader } from "react-spinners";

const Services = () => {
  const axiosCommon = useAxiosCommon();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services", category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/services?category=${category}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // console.log(services);

  return (
    <ContainerLayout>
      {services && services.length > 0 ? (
        <div>
          <section className="px-4 mx-auto ">
            <div className="flex flex-col mb-8">
              <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-300 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-nunitoSans text-left rtl:text-right text-gray-800 "
                          >
                            <div className="flex items-center gap-x-3">
                              <h2>Worker Info</h2>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-nunitoSans text-left rtl:text-right text-gray-800 "
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Category</span>
                            </button>
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-nunitoSans text-left rtl:text-right text-gray-800 "
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Phone No.</span>
                            </button>
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-nunitoSans text-left rtl:text-right text-gray-800 "
                          >
                            Available Status
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-nunitoSans  text-gray-800 "
                          >
                            View Details
                          </th>
                        </tr>
                      </thead>
                      {services.map((service) => (
                        <ServiceTableRow key={service._id} service={service} />
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <ClimbingBoxLoader size={12} color="#421d81" />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              No Worker Available
            </h2>
            <p className="text-gray-500">Contact with us later.</p>
          </div>
        </div>
      )}
    </ContainerLayout>
  );
};

export default Services;
