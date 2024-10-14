import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const AdminRoute = ({ children }) => {

  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "admin") return children;
  return <Navigate to="/dashboard"></Navigate>;
  
};

export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.element,
};
