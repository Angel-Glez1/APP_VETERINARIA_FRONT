import { useState, useEffect, createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/axios';
import { authReducer } from '../reducer/authReducer';


const init = () => ({ isAuthenticated: false });



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, dispatch] = useReducer(authReducer, '', init);

    return (
        <AuthContext.Provider value={{
            auth,
            dispatch,
        }} >
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider,
}

export default AuthContext;
