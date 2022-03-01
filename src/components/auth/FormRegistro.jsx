import { useState } from 'react';
import Error from '../ui/Error';


const FormRegistro = ({ submit, newError, resetError, error }) => {



    const [formRegristro, setFormRegristro] = useState({
        nombre: '',
        correo: '',
        password: '',
        password2: '',
    });

    const { nombre, correo, password, password2 } = formRegristro;


    const handleSubmit = (e) => {
    
        e.preventDefault();

        resetError();

        if ([nombre, correo, password, password2].includes('')) {
            newError('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 5) {
            newError('El password tiene que ser mayor a 5 caracteres');
            return;
        }

        if (password !== password2) {
            newError('Las contraseñas no coinciden.');
            return;
        }

        resetError();
        setFormRegristro({ nombre: '', correo: '', password: '', password2: '' });

        // Mandar la data al componente padre.
        submit({ nombre, correo, password });

    }


    const handleChange = ({ target }) => {

        setFormRegristro(prev => ({
            ...prev,
            [target.name]: target.value
        }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h2 className="font-black text-center text-3xl md:text-left"> Registrate</h2>

                {
                    error.exist && <Error message={error.msg} />
                }


                <div className="mt-5 mb-5">
                    <label htmlFor="Nombre" className="uppercase  text-gray-500 text-xl font-semibold " >
                        Ingresa tu Nombre
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        id="nombre"
                        placeholder="Nombre"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-pink-500"
                    />
                </div>


                <div className="mt-5 mb-5">
                    <label htmlFor="correo" className="uppercase  text-gray-500 text-xl font-semibold " >
                        Ingresa un Correo
                    </label>
                    <input
                        type="email"
                        name="correo"
                        value={correo}
                        onChange={handleChange}
                        id="correo"
                        placeholder="correo"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-pink-500"
                    />
                </div>

                <div className="mt-5 mb-5">
                    <label htmlFor="correo" className="uppercase  text-gray-500 text-xl font-semibold " >
                        Ingresa una contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Contraseña"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-pink-500"
                    />
                </div>

                <div className="mt-5 mb-5">
                    <label htmlFor="correo" className="uppercase  text-gray-500 text-xl font-semibold " >
                        Repetir la contraseña
                    </label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                        id="password2"
                        placeholder="Repetir Contraseña..."
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
    )
}


export default FormRegistro;