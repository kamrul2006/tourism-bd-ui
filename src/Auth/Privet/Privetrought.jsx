import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loader from "../../components/Fixed/Loader";

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    // console.info(location)


    if (loading) {
        return (<div>
            <Loader />
        </div>)
    }

    if (user) {
        return children
    }

    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivetRout;