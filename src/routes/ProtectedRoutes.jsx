import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

ProtectedRoutes.propTypes = {
  children: ProtectedRoutes.any,
};

export default ProtectedRoutes;
