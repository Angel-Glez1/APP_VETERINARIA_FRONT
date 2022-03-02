import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';


const PacienteContext = createContext();


export const PacienteProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});


    useEffect(() => {

        const getPacientes = async () => {



            try {
                const token = localStorage.getItem('token_veterinaria');
                if (!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                }

                const { data } = await clienteAxios('/pacientes', config);
                setPacientes(data.pacientes);

            } catch (error) {
                console.log(error);
            }


        }

        getPacientes();

    }, []);

    const guardarPaciente = async ({ nombre, propietario, email, fecha, sintomas, id }) => {


        const paciente = { nombre, propietario, email, fecha, sintomas }

        const token = localStorage.getItem('token_veterinaria');
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        }


        try {

            if (id) {
                const { data } = await clienteAxios.put(`/pacientes/${id}`, paciente, config);

                // console.log(data);
                if (data.ok) {

                    const { createdAt, __v, veterinario_id, updatedAt, ...paciente } = data.paciente;
                    const pacientesUpdated = pacientes.map(pacienteState => pacienteState._id === paciente._id ? paciente : pacienteState);

                    // setPaciente({});
                    setPacientes(pacientesUpdated);
                }

            } else {

                const { data } = await clienteAxios.post('/pacientes', paciente, config);
                const { createdAt, __v, veterinario_id, updatedAt, ...rest } = data.paciente;
                setPacientes([rest, ...pacientes]);
            }



        } catch (error) {

            console.log(error.response);

        }

    }


    const setEditar = ({ email, fecha, nombre, propietario, sintomas, _id }) => {
        setPaciente({ email, fecha, nombre, propietario, sintomas, _id });
    }


    const eliminarPaciente = async (paciente) => {

        const c = confirm('¿Seguro que desea eliminar este producto?')


        if (c) {
            const token = localStorage.getItem('token_veterinaria');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }

            try {

                const { data } = await clienteAxios.delete(`/pacientes/${paciente._id}`, config);

                console.log(data);

                if (data.ok) {
                    
                    const pacientesUpdated = pacientes.filter(pacienteState => pacienteState._id !== paciente._id);
                    setPacientes(pacientesUpdated);

                }



            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <PacienteContext.Provider value={{
            pacientes,
            setEditar,
            guardarPaciente,
            paciente,
            eliminarPaciente
        }}
        >
            {children}
        </PacienteContext.Provider>
    )
}



export default PacienteContext;