import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="bg-gradient-to-r from-sky-50 to-violet-100">
        <div className="h-screen max-w-screen-xl px-6 py-4 mx-auto  flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div className="w-full lg:w-1/2 mx-8">
              <div className="text-7xl text-sky-500 font-dark font-extrabold mb-8">
                {" "}
                404
              </div>
              <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                Sorry we couldn&apos;t find the page you&apos;re looking for
              </p>
              <Link
                to="/"
                className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-sky-600 active:bg-sky-600 hover:bg-sky-700"
              >
                Back to homepage
              </Link>
            </div>
            <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
              <img
                src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
                className=""
                alt="Page not found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
