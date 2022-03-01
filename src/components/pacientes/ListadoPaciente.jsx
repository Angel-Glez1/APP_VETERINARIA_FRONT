import usePacientes from '../../hook/usePacientes';



const ListadoPacientes = () => {
    const { pacientes, loading } = usePacientes();



    return (
        <>
            {
                pacientes.length === 0
                    ? (<p>No hay pacientes</p>)
                    : (
                        <>
                            <p>{JSON.stringify(pacientes)}</p>
                        </>
                    )
            }
        </>
    )
}


export default ListadoPacientes;