import { useState } from "react";
import FormPaciente from "../components/pacientes/FormPaciente";
import ListadoPacientes from "../components/pacientes/ListadoPaciente";
import useAuth from "../hook/useAuth";



const AdministrarPacientes = () => {

    const [showForm, setShowForm] = useState(false);


    return (
        <div className="flex gap-4 flex-col md:flex-row">

            <button type="button" className="bg-indigo-600 text-white font-bold uppercase mx-3 p-3 rounded-md block md:hidden" onClick={() => setShowForm(!showForm) }  >
                Show Form
            </button>

            <div className={`${showForm ? 'block' : 'hidden'} md:block md:w-1/2  lg:w-2/5 w-11/12 mx-auto`} >
                <FormPaciente />
            </div>
            <div className="md:w-1/2  lg:w-2/5">
                <ListadoPacientes />
            </div>
        </div>
    )
}


export default AdministrarPacientes;