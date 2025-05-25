import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 text-gray-200  transition-colors duration-300 transform rounded-lg hover:bg-sky-300  hover:text-gray-700 ${
          isActive ? "bg-sky-300 text-sky-900 font-semibold" : "text-gray-500"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
};

export default MenuItem;
