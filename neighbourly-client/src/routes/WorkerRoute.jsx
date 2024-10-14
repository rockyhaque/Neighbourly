import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const WorkerRoute = ({ children }) => {

  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "worker") return children;
  return <Navigate to="/dashboard"></Navigate>;
  
};

export default WorkerRoute;

WorkerRoute.propTypes = {
  children: PropTypes.element,
};