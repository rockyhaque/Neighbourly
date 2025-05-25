import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItems = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {children}
    </Link>
  );
};

NavItems.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItems;
