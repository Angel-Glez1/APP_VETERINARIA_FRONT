import { useState, useEffect } from "react";
import usePacientes from "../../hook/usePacientes";



const FormPaciente = () => {

    // Custom Hook
    const { guardarPaciente, paciente } = usePacientes();

    // State the component
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {

        if (paciente?.nombre) {
            const { email, fecha, nombre, propietario, sintomas, _id } = paciente;
            setNombre(nombre)
            setPropietario(propietario)
            setEmail(email)
            setFecha(new Date(fecha).toISOString().slice(0, 10))
            setSintomas(sintomas)
            setId(_id);
        }

    }, [paciente]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, sintomas].includes('')) {
            console.log('Todos los campos son obligatorios');
        }

        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id });

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId(null);
    }

    return (
        <>
            <p className="text-xl uppercase font-bold  text-center mb-10">
                Añade tus pacientes {' '}
                <span className="text-pink-500">y administralos</span>
            </p>

            <form onSubmit={handleSubmit}>

                <div className="mt-5">
                    <label htmlFor="mascota" className="uppercase text-gray-700 font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        name="mascota"
                        id="mascota"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-gray-500"
                        autoComplete="off"
                        placeholder="Nombre mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>


                <div className="mt-5">
                    <label htmlFor="propietario" className="uppercase text-gray-700 font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        name="propietario"
                        id="propietario"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-gray-500"
                        autoComplete="off"
                        placeholder="Nombre propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="uppercase text-gray-700 font-bold">
                        Emial Propietario
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-gray-500"
                        autoComplete="off"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="fecha" className="uppercase text-gray-700 font-bold">
                        Fecha
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-gray-500"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="sintomas" className="uppercase text-gray-700 font-bold">
                        Sintomas
                    </label>
                    <textarea
                        placeholder="Sintomas del paciente..."
                        className="p-3 bg-gray-100 rounded form-input border w-full focus:outline-none leading-tight focus:bg-white focus:border-gray-500"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className="mt-5 mb-5">
                    <input
                        type="submit"
                        value={id ? 'Editar' : 'Guardar'}
                        className="font-bold p-2 text-center 
                        uppercase bg-pink-300 text-pink-600 w-full rounded-sm
                        hover:cursor-pointer hover:bg-pink-200
                        "
                    />
                </div>


            </form>
        </>
    )
}


export default FormPaciente;