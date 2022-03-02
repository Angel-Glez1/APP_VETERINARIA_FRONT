import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import clienteAxios from "../config/axios";
import useAuth from "../hook/useAuth";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import AuthRouter from "./router/AuthRouter";
import HomeRouter from "./router/HomeRouter";



const AppRouter = () => {

    const { login, logout } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const autenticarUsuario = async () => {

            console.log('Revisando Auntentificacion...');
            const token = localStorage.getItem('token_veterinaria') || '';

            localStorage.getItem('token_veterinaria')
            if (!token) {
                setLoading(false);
                logout();
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
                login({ token, user: data.veterinario })

            } catch (error) {

                logout();
                console.log(error.response);
            }

            setLoading(false);
        }

        autenticarUsuario();

    }, []);


    if(loading){
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h1 className="text-green-700 text-2xl font-bold">Cargando ...</h1>
            </div>
        )
    }

    return (
        <>
            <Routes>

                <Route path='/*' element={<PublicRouter> <AuthRouter /> </PublicRouter>} />
                <Route path='/admin/*' element={<PrivateRouter> <HomeRouter /> </PrivateRouter>} />

            </Routes>
        </>
    )
}


export default AppRouter;