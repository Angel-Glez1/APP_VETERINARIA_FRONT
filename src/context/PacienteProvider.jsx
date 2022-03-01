import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';


const PacienteContext = createContext();


export const PacienteProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([]);
    

    useEffect(() => {

        const getPacientes = async () => {

            

            try {
                const token = localStorage.getItem('token');
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

    const guardarPaciente = async ({ nombre, propietario, email, fecha, sintomas }) => {

        const token = localStorage.getItem('token');

        const paciente = { nombre, propietario, email, fecha, sintomas }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        }


        try {

            const { data } = await clienteAxios.post('/pacientes', paciente, config);

            const { createdAt, __v, veterinario_id, updatedAt, ...rest } = data.paciente;

            setPacientes([
                ...pacientes,
                rest
            ]);

        } catch (error) {

            console.log(error.response);

        }

    }


    return (
        <PacienteContext.Provider value={{
            pacientes,
            guardarPaciente,
        }}
        >
            {children}
        </PacienteContext.Provider>
    )
}



export default PacienteContext;