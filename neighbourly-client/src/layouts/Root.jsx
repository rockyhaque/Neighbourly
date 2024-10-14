import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-505px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
