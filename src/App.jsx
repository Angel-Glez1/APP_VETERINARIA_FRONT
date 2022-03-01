import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { PacienteProvider } from './context/PacienteProvider';


import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import AdministrarPacientes from './pages/AdministrarPacientes';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import Login from './pages/Login';
import NuevoPassword from './pages/NuevoPassword';
import OlvidePassword from './pages/OlvidePassword';
import Pacientes from './pages/Pacientes';
import Perfil from './pages/Perfil';
import Registro from './pages/Registro';

const App = () => {



  return (


    <BrowserRouter>
      <AuthProvider>
        <PacienteProvider>
          
          <Routes>
            <Route path='/' element={<AuthLayout />} >
              <Route index element={<Login />} />
              <Route path='registro' element={<Registro />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
            </Route>

            <Route path='/admin' element={<RutaProtegida />} >
              <Route index element={<AdministrarPacientes />} />
              <Route path="pacientes" element={<Pacientes />} />
              <Route path="perfil" element={<Perfil />} />
            </Route>
          </Routes>

        </PacienteProvider>
      </AuthProvider>
    </BrowserRouter>



  )
}

export default App  