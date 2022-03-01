const Exito = ({ message }) => {
    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3 mb-6" role="alert">
            <strong className="font-bold">Exito!</strong>
            <span className="block">{message}</span>
        </div>
    )
}


export default Exito;