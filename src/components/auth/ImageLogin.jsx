import loginSVG from '../../img/svg/welcomCat.svg';
import RegistroSVG from '../../img/svg/iniciarSesion.svg';
import PasswordSVG from '../../img/svg/olvide_password.svg';
import ConfirmSVG from '../../img/svg/confim_count.svg';

const images = {
    login: loginSVG,
    register: RegistroSVG,
    password: PasswordSVG,
    confirm: ConfirmSVG
}


const ImageLogin = ({ typeImage = 'login', size = 'w-full', children }) => {




    return (
        <div className="hidden md:block" >
            <div>
                <img className={`object-cover mx-auto  ${size}`} src={images[typeImage]} alt="Imagen de bienvenida" />
            </div>
            <h2 className="font-black text-4xl text-center">
                {children}
                
            </h2>
        </div>
    )
}


export default ImageLogin;