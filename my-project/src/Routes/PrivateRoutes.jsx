import { useContext } from "react";
import { AuthContext } from "../../../src/Components/Pages/Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      if (loading) {
            return <span className="loading flex relative left-[900px]  loading-spinner loading-lg"></span>;
      } if (user) {
            return children;
      }
      return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
PrivateRoutes.prototype = {
      children: PropTypes.node
};