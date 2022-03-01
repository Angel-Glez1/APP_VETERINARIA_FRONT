// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/auth/FormLogin";
import ImageLogin from "../components/auth/ImageLogin";
import clienteAxios from "../config/axios";
import useAuth from "../hook/useAuth";




const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const submit = async (email, password) => {


        try {

            const { data } = await clienteAxios.post('/auth/login', { email, password });
            const { user, token } = data;
            
            login({ user, token });
            navigate('/admin', { replace: true });

        } catch (error) {

            console.log({ error: error });
        }
    }




    return (
        <>
            <ImageLogin>
                Inicia sesión y Administra tus <span className="text-pink-500">pacientes.</span>
            </ImageLogin>

            <FormLogin submit={submit} />
        </>
    )
}


export default Login;