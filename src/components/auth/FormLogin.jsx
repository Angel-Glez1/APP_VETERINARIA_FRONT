import { useState } from 'react';
import { Link } from 'react-router-dom'


const FormLogin = ({ submit }) => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([email, password].includes('')) {
            console.log('Los campos son obligatorios.');
            return;
        }

        submit(email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h2 className="font-black text-center text-3xl md:text-left " >Iniciar <span className="text-pink-500">sesion</span></h2>

                <div className="mt-5 mb-5">
                    <label
                        htmlFor="emial"
                        className="uppercase  text-gray-500 text-xl font-semibold "
                    >
                        Ingresa tu correo
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Emial..."
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-pink-500"
                    />
                </div>

                <div className="mt-5 mb-5">
                    <label
                        htmlFor="password"
                        className="uppercase  text-gray-500 text-xl font-semibold "
                    >
                        Ingresa tu Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="pasword"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Contraseña..."
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

            <div>
                <Link
                    to="/olvide-password"
                    className='underline text-pink-300'
                >Olvide mi password</Link>
            </div>
        </div>
    )
}


export default FormLogin;