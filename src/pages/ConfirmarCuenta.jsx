import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageLogin from "../components/auth/ImageLogin";
import clienteAxios from "../config/axios";



const ConfirmarCuenta = () => {


    const [msg, setMsg] = useState('');
    const [cargando, setCargando] = useState(false);
    const { id } = useParams();

    useEffect(() => {

        if (id) {

            const confirmcuenta = async () => {

                setMsg('');
                setCargando(true);

                try {

                    const URL = `/auth/confirmar/${id}`;
                    const { data } = await clienteAxios(URL);

                    
                    if (data?.ok) {

                        setMsg('Cuenta confirmada, Inicia sesion y empize a administrar tus pacientes');

                    } else {

                        setMsg(data.msg);
                    }

                } catch (error) {
                    
                    console.log(error.response);
                    setMsg( error.response.data.msg );
                }

                setCargando(false);
            }


            confirmcuenta();

        }


    }, []);

    return (
        <>
            <ImageLogin typeImage="confirm" size="w-2/4">
                Confirma tu cuenta
            </ImageLogin>

            <div>
                {
                    !cargando && (<p className="p-3 bg-blue-300 text-blue-600 border border-blue-400 rounded w-1/2 self-center" > { msg } </p>)
                }
            </div>
        </>
    )
}


export default ConfirmarCuenta;