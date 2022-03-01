import { Outlet, Navigate } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Headers from "../components/ui/Headers";
import useAuth from "../hook/useAuth";



const RutaProtegida = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <>
            {
                auth._id
                    ? (
                        <>
                            <Headers />
                                <main className="container mx-auto mt-10">
                                    <Outlet />
                                </main>
                            <Footer />
                        </>

                    )
                    : (<Navigate to={'/'} />)
            }

        </>
    )
}


export default RutaProtegida;