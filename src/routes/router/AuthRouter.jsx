import { Route, Routes } from "react-router-dom";
import MenuAuth from "../../components/ui/menuAuth";
import useAuth from "../../hook/useAuth";
import ConfirmarCuenta from "../../pages/ConfirmarCuenta";
import Login from "../../pages/Login";
import NuevoPassword from "../../pages/NuevoPassword";
import OlvidePassword from "../../pages/OlvidePassword";
import Registro from "../../pages/Registro";



const AuthRouter = () => {

    const { isAuthenticated } = useAuth();

    const result = isAuthenticated ? 'Autentificado' : 'No Autentificado';
    console.log({ result, isAuthenticated });
    
    return (
        <>
            <MenuAuth />

            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 px-5 md:px-3 md:gap-12 items-center">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path='/registro' element={<Registro />} />
                    <Route path='/olvide-password' element={<OlvidePassword />} />
                    <Route path='/olvide-password/:token' element={<NuevoPassword />} />
                    <Route path='/confirmar/:id' element={<ConfirmarCuenta />} />
                </Routes>
            </main>
        </>


    )
}


export default AuthRouter;