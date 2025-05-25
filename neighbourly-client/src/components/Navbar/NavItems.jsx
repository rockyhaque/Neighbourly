import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItems = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0
         ${
           isActive
             ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-300 font-semibold"
             : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
         }`
      }
    >
      {children}
    </NavLink>
  );
};

NavItems.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItems;
