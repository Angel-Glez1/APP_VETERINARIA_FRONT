import usePacientes from "../../hook/usePacientes";



const Paciente = ({ paciente }) => {

    const { setEditar, eliminarPaciente } = usePacientes();

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente;



    const formatFecha = fecha => {

        const newDate = new Date(fecha);
        return new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(newDate);
    }



    return (
        <div className="mx-1 my-10 bg-white shadow-md px-5 py-1 rounded-md">

            <p className="font-bold uppercase text-pink-400 my-2">
                Nombre: {' '}<span className="font-normal text-black normal-case">{nombre}</span>
            </p>

            <p className="font-bold uppercase text-pink-400 my-2">
                Propietario: {' '}<span className="font-normal text-black normal-case">{propietario}</span>
            </p>

            <p className="font-bold uppercase text-pink-400 my-2">
                Email: {' '}<span className="font-normal text-black normal-case">{email}</span>
            </p>

            <p className="font-bold uppercase text-pink-400 my-2">
                Fecha: {' '}<span className="font-normal text-black normal-case">{formatFecha(fecha)}</span>
            </p>

            <p className="font-bold uppercase text-pink-400 my-2">
                Sintomas: {' '}<span className="font-normal text-black normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between items-center my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-pink-300 hover:bg-pink-400  text-gray-800 uppercase font-bold rounded-lg"
                    onClick={() => setEditar(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-400  text-gray-800 uppercase font-bold rounded-lg"
                    onClick={() => eliminarPaciente(paciente)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}


export default Paciente;