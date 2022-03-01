import { useContext } from "react";
import AuthContext from "../context/AuthProvider";



const useAuth = () => {

    const { auth, dispatch } = useContext(AuthContext);


    const login = ({ token, user }) => {
        localStorage.setItem('token', token);
        dispatch({ type: 'LOGIN', payload: user })
    };


    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' })
    }


    return {
        ...auth,
        login,
        logout
    }
}





export default useAuth;