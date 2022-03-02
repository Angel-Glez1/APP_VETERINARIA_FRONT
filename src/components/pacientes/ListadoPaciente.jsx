import usePacientes from '../../hook/usePacientes';
import Paciente from './Paciente';



const ListadoPacientes = () => {
    const { pacientes, loading } = usePacientes();



    return (
        <>
            {
                pacientes.length > 0 ?
                    (
                        <>
                            <h2 className="font-black text-3xl text-center ">Listado Paciente</h2>
                            {
                                pacientes.map(paciente => ((
                                    <Paciente key={paciente._id} paciente={paciente} />
                                )))
                            }
                        </>


                    ) :
                    (<h1>No hay pacientes</h1>)

            }
        </>
    )
}


export default ListadoPacientes;