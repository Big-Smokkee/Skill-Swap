import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";
import LoadingPage from "../pages/LoadingPage";


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user && user?.email)
        return children
    else
        return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;