import { Outlet, Navigate } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Headers from "../components/ui/Headers";
import useAuth from "../hook/useAuth";



const RutaProtegida = () => {

    const { isAuthenticated } = useAuth();


    const result = isAuthenticated ? 'Autentificado bienvanido' : 'No Autentificado fuera';
    console.log({ result, isAuthenticated });

    return (
        <>
        

            <Headers />

            <main className="container mx-auto mt-10">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}


export default RutaProtegida;