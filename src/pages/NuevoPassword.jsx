import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageLogin from "../components/auth/ImageLogin";
import clienteAxios from "../config/axios";



const NuevoPassword = () => {

    const { token } = useParams();
    const [password, setPassword] = useState('');


    useEffect(() => {

        if (token) {


            const validarToken = async () => {
                try {
                    await clienteAxios(`/auth/resetPassword/${token}`);
                } catch (error) {
                    console.log(error.response.data);
                }
            }

            validarToken();
        }

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (password === '') {
            return;
        }

        try {

            const data = await clienteAxios.post(`/auth/resetPassword/${token}`, { password });

            console.log(data);
        } catch (error) {
            console.log(error.response);
        }

    }

    return (
        <>
            <ImageLogin typeImage="password" size="w-2/3" >
                <span className="text-pink-500" >Reestable tu nuevo password para que no pierdas</span> tus pacientes.
            </ImageLogin>

            <div className="">

                <form onSubmit={handleSubmit} >
                    <div className="mt-5 mb-5">
                        <label htmlFor="correo" className="uppercase  text-gray-500 text-xl font-semibold " >
                            Nuevo password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Nuevo password"
                            className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-pink-500"
                        />
                    </div>

                    <div className="mt-5 mb-5">
                        <input
                            type="submit"
                            value={'Enviar'}
                            className="font-bold p-2 text-center
                                uppercase bg-pink-300 text-pink-600 w-full rounded-sm
                                hover:cursor-pointer hover:bg-pink-200"
                        />
                    </div>
                </form>

            </div>

        </>

    )
}


export default NuevoPassword;