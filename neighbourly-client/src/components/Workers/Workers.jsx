import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Workers = () => {
  const { user } = useAuth();
  const [role] = useRole();
  // console.log(role);

  return (
    <div>
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
          Revolutionize Your Insurance
          <span className="relative whitespace-nowrap text-white-600 dark:text-gray-300">
            Operations
          </span>
          <span className="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
            <svg
              aria-hidden="true"
              viewBox="0 0 500 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Gradient for the stroke */}
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ff9a8b", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#ff6a88", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ff99ac", stopOpacity: 0.6 }}
                  />
                </linearGradient>
              </defs>

              {/* Complex wave pattern with gradient stroke */}
              <path
                d="
        M0,20 
        Q50,5 100,20 
        T200,20 
        Q250,35 300,20 
        T400,20 
        Q450,5 500,20"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8, 6" /* Dashed effect */
                opacity="0.9" /* Slight transparency */
              />
            </svg>

            <span className="relative">with AI</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Workers;
