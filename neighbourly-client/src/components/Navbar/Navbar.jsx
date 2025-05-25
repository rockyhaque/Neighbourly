import { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [role] = useRole();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logOut(); // ensure logout completes
    setIsDropdownOpen(false); // close the dropdown after logout
  };

  return (
    <nav className="relative bg-white  dark:bg-gray-800 shadow-2xl sticky z-50 top-0">
      <div className="max-w-screen-xl px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex justify-center items-center gap-3">
              <img className="w-auto h-8 md:h-8 " src="/logo.png" alt="logo" />
              <p className="text-gray-300 font-semibold text-base md:text-xl font-nunitoSans">
                Neighbourly
              </p>
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center font-nunitoSans ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavItems to="/">Home</NavItems>
              <NavItems to="/contact-us">Contact Us</NavItems>
              <NavItems to="/about">About</NavItems>
              <NavItems to="/faq">FAQ</NavItems>
              {user && <NavItems to="/dashboard">Dashboard</NavItems>}
              {!user && (
                <>
                  <NavItems to="/login">Login</NavItems>
                  <NavItems to="/register">Register</NavItems>
                </>
              )}
            </div>

            <div className="flex justify-center items-center mt-4 lg:mt-0">
              <div className="dropdown dropdown-end relative">
                {user && (
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="photo"
                        src={user?.photoURL}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

                {isDropdownOpen && (
                  <ul className="menu menu-sm dropdown-content bg-gradient-to-r from-sky-100 to-violet-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 right-0">
                    <li>
                      <div className="justify-between">
                        {user?.displayName}
                        <span className="badge bg-sky-300">
                          {role.charAt(0).toUpperCase() +
                            role.slice(1).toLowerCase()}
                        </span>
                      </div>
                    </li>
                    <li>
                      <Link to="/profile">
                        <p>Profile Settings</p>
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
