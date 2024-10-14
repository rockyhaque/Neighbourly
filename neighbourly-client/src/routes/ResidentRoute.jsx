import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const ResidentRoute = ({ children }) => {

  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "resident") return children;
  return <Navigate to="/dashboard"></Navigate>;
  
};

export default ResidentRoute;

ResidentRoute.propTypes = {
  children: PropTypes.element,
};
