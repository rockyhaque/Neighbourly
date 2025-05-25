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
    <div className="h-screen overflow-hidden flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-200 ease-in-out bg-gray-800 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex-shrink-0`}
      >
        <Sidebar />
      </div>

      {/* Toggle Button for small devices */}
      <button
        className="md:hidden p-2 text-2xl text-gray-600 fixed top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu />
      </button>

      {/* Main content area that scrolls */}
      <div className="flex-1 overflow-y-auto pl-0 md:px-6">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default DashboardLayout;
