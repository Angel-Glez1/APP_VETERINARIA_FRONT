import { Navigate, Outlet } from "react-router-dom"
import MenuAuth from "../components/ui/menuAuth"
import useAuth from "../hook/useAuth"


const AuthLayout = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return <p>Cargando...</p>
    }

    console.log(auth._id ? 'Exite' : 'No exite');
    return (
        <>
            {
                auth._id ?
                    (<Navigate to='/admin' />) :
                    (
                        <>
                            <MenuAuth />

                            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 px-5 md:px-3 md:gap-12 items-center">
                                <Outlet />
                            </main>
                        </>
                    )
            }
        </>


    )
}

export default AuthLayout