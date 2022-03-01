import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";



const PrivateRouter = ({ children }) => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated
        ? children
        : <Navigate to={'/'} />

}


export default PrivateRouter;