import { useState } from 'react';
import ImageLogin from '../components/auth/ImageLogin';
import clienteAxios from '../config/axios';



const OlvidePassword = () => {

    const [emial, setEmail] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (emial === '') {
            console.log('El email es obligatio');
            return;
        }


        try {

            const { data } = await clienteAxios.post('/auth/resetPassword', { email: emial });

            console.log({data});
        } catch (error) {
            console.log(error.response.data);
        }

    }

    return (
        <>
            <ImageLogin typeImage="password" size="w-2/3" >
                <span className="text-pink-500" >Recupera tu cuenta y no pierdas</span> tus pacientes.
            </ImageLogin>

            <div className="w-">
                <form onSubmit={handleSubmit} >
                    <div className="mt-5 mb-5">
                        <label htmlFor="correo" className="uppercase  text-gray-500 text-xl font-semibold " >
                            Ingresa un Correo
                        </label>
                        <input
                            type="email"
                            name="correo"
                            value={emial}
                            onChange={(e) => setEmail(e.target.value)}
                            id="correo"
                            placeholder="correo"
                            className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-pink-500"
                        />
                    </div>

                    <div className="mt-5 mb-5">
                        <input
                            type="submit"
                            value={'Enviar'}
                            className="font-bold p-2 text-center 
                                uppercase bg-pink-300 text-pink-600 w-full rounded-sm
                                hover:cursor-pointer hover:bg-pink-200
                                "
                        />
                    </div>

                </form>
            </div>
        </>
    )
}


export default OlvidePassword;