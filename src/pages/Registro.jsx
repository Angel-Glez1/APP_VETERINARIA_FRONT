import axios from "axios";
import { useState } from "react";
import FormRegistro from "../components/auth/FormRegistro";
import ImageLogin from "../components/auth/ImageLogin";
import Exito from "../components/ui/Exito";
import clienteAxios from "../config/axios";


const Registro = () => {

    const [exito, setExito] = useState(false);
    const [error, setError] = useState({ exist: false, msg: '' }); 

    const newError = (msg = '') => setError({ exist: true, msg });
    const resetError = () => setError({ exist: false, msg: '' });

    const submit = async ({ nombre, correo, password }) => {

        setExito(false);

        try {


            const { data } = await clienteAxios.post(`/auth/registro`, { nombre, password, email: correo })

            console.log(data);

            if (data.ok) {

                setExito(true);

            } else {

                setExito(false);
                newError(data.msg);

            }


        } catch (error) {
            console.log(error);
            setError('Algo salio mal a momento de hacer la peticion.')
        }



    }





    return (
        <>
            <ImageLogin typeImage="register" size="w-3/5" >
                Crea una cuenta y <span className="text-pink-500"> Administra tus pacientes.</span>
            </ImageLogin>

            {
                exito
                    ? (<Exito message='Estas a un paso de terminar tu registro, revisa tu email y confirma tu cuenta' />)
                    : (<FormRegistro submit={submit} newError={newError} resetError={resetError} error={error} />)
            }



        </>
    )
}


export default Registro;