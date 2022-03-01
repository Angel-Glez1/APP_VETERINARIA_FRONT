import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/axios';




const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {

        const autenticarUsuario = async () => {

            console.log('Revisando Auntentificacion...');
            const token = localStorage.getItem('token') || '';

            if (!token) {
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }

            try {

                const { data } = await clienteAxios('/veterinario/perfil', config);
                setAuth(data.veterinario);

            } catch (error) {
                console.log(error.response);
                setAuth({});

            }

            setLoading(false);
        }

        autenticarUsuario();


    }, []);



    const cerrarSession = () => {
        localStorage.removeItem('token');
        setAuth({});
    }



    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading,
                cerrarSession

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthProvider,
}

export default AuthContext;
