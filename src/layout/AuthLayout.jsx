import { Navigate, Outlet } from "react-router-dom"
import MenuAuth from "../components/ui/menuAuth"
import useAuth from "../hook/useAuth"


const AuthLayout = () => {

    const { isAuthenticated } = useAuth();


    const result = isAuthenticated ? 'Autentificado' : 'No Autentificado';
    console.log({ result, isAuthenticated });

    return (
        <>
            <MenuAuth />

            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 px-5 md:px-3 md:gap-12 items-center">
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout