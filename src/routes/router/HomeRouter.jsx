import { Route, Routes } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import Headers from "../../components/ui/Headers";
import useAuth from "../../hook/useAuth";

import AdministrarPacientes from "../../pages/AdministrarPacientes";
import Pacientes from "../../pages/Pacientes";
import Perfil from "../../pages/Perfil";



const HomeRouter = () => {

    const { isAuthenticated } = useAuth();

    const result = isAuthenticated ? 'Autentificado Bienvenido' : 'No Autentificado fuera';

    console.log({ result, isAuthenticated });

    return (
        <>
            <Headers />
            <main className="container mx-auto mt-10">

                <Routes>
                    <Route path='/' element={<AdministrarPacientes />} />
                    <Route path="/pacientes" element={<Pacientes />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            </main>
            
            <Footer />
        </>




    )
}


export default HomeRouter;