import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";



const Headers = () => {

    const { logout, user } = useAuth();

    return (
        <header className="py-10 bg-pink-400">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
                <h1 className="font-bold text-2xl px-2 text-center" >
                    <p>Administrador de pacientes {' '} </p><span className="text-white"> Veterinaria </span>
                    <p>Hola: {user.nombre}</p>
                </h1>


                <nav className="px-2 flex gap-4 mt-4 md:mt-0">

                    <Link to="/admin" className="text-white text-sm uppercase font-semibold "> Inicio </Link>
                    <Link to="/admin/pacientes" className="text-white text-sm uppercase font-semibold "> Pacientes </Link>
                    <Link to="/admin/perfil" className="text-white text-sm uppercase font-semibold "> Perfil </Link>


                    <button className="uppercase font-bold" onClick={() => logout()} >
                        Cerrar Sesion
                    </button>
                </nav>
            </div>
        </header>
    )
}


export default Headers;