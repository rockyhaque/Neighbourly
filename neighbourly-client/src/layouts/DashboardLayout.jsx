import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../components/Dashboard/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative min-h-screen md:flex">
      {/* Button to toggle sidebar visibility on small devices */}
      <button
        className="md:hidden p-2 text-2xl text-gray-600 fixed top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0 z-40 w-64`}
      >
        <Sidebar />
      </div>

      {/* Outlet content */}
      <div className="flex-1">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
