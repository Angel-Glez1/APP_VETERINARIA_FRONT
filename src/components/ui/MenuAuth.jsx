import { Link } from "react-router-dom";
import { BiBone } from "react-icons/bi";



const MenuAuth = () => {
    return (
        <div className="shadow-md">

            <header className="container mx-auto flex justify-between items-center py-4 p-2">
                <div className="flex justify-between items-center">
                    <BiBone size={12} />
                    <h2 className="font-bold text-2xl ml-1">Veteri<span className="text-pink-500">naria</span></h2>
                </div>

                <nav>
                    <Link
                        to='/'
                        className="p-2 uppercase font-bold border rounded-sm
                            border-pink-500 text-pink-500
                            hover:cursor-pointer hover:bg-pink-200
                            "
                    >
                        Login
                    </Link>

                    <Link
                        to='/registro'
                        className="p-2 uppercase font-bold ml-2 rounded-sm
                            border-pink-500 text-pink-500
                            hover:cursor-pointer hover:bg-pink-200
                        "
                    >
                        Registrate
                    </Link>
                </nav>
            </header>

        </div>
    )
}


export default MenuAuth;