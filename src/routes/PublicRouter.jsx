import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";



const PublicRouter = ({ children }) => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated 
     ? <Navigate  to={'/admin'}/>
     : children

}


export default PublicRouter;