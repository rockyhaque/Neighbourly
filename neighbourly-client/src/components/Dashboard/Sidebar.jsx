import useAuth from "../../hooks/useAuth";
import MenuItem from "../../pages/Dashboard/Menu/MenuItem";
import { RiHomeLine } from "react-icons/ri";
import useRole from "../../hooks/useRole";
import { FaUserShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdminMenu from "../../pages/Dashboard/Menu/AdminMenu";
import ResidentMenu from "../../pages/Dashboard/Menu/ResidentMenu";
import WorkerMenu from "../../pages/Dashboard/Menu/WorkerMenu";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole();

  return (
    <div className="w-64 h-full bg-gradient-to-r from-neutral-900 to-slate-800  p-3 shadow-lg pt-10 flex flex-col justify-between  ">
      <div>
        <div className="flex justify-center items-center space-x-4 p-2 mb-5">
          <Link to="/" className="flex justify-center items-center gap-3">
            <img className="w-auto h-8 md:h-8 " src="/logo.png" alt="logo" />
            <p className="text-gray-200 font-semibold text-base md:text-xl font-nunitoSans">
              Neighbourly
            </p>
          </Link>
        </div>

        <div className="font-nunitoSans">
          <div className="relative cursor-pointer dark:text-white">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-sky-500 rounded-lg dark:bg-gray-200" />
            <div className="relative p-1 bg-white dark:bg-gray-800 border-2 border-sky-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
              <div className="flex items-center">
                <div className="flex items-center space-x-4 p-2">
                  <img
                    className="h-12 rounded-full"
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                    alt="User Profile"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-200  ">
                      {user?.displayName}
                    </h4>
                    <span className="text-sm flex items-center space-x-1">
                      <FaUserShield />
                      <span className="text-gray-400 pl-1">
                        {role.charAt(0).toUpperCase() +
                          role.slice(1).toLowerCase()}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          <MenuItem label="Home" address="/" icon={RiHomeLine} />
          {/* <MenuItem label="Statistics" address="/dashboard" icon={BsGraphUp} /> */}

          {role === "admin" && <AdminMenu />}
          {role === "resident" && <ResidentMenu />}
          {role === "worker" && <WorkerMenu />}
        </ul>
      </div>

      {/* Logout button */}

      <div className="flex justify-evenly items-center my-12 text-gray-300 gap-4">
        <button
          onClick={logOut}
          className="relative inline-block px-6 py-3 font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"
        >
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center space-x-2 rounded-xl  ">
            <span>LogOut</span>
            <IoLogOutOutline size={25} />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
