import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const locations = useLocation()
    console.log(locations);
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={locations.pathname} to="/login"></Navigate>
};

export default PrivetRouter;