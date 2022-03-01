import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import clienteAxios from './config/axios';
import { AuthProvider } from './context/AuthProvider';
import { PacienteProvider } from './context/PacienteProvider';
import useAuth from './hook/useAuth';
import AppRouter from './routes/AppRouter';
import PrivateRouter from './routes/PrivateRouter';
import PublicRouter from './routes/PublicRouter';
import AuthRouter from './routes/router/AuthRouter';
import HomeRouter from './routes/router/HomeRouter';

const App = () => {

  // const { login, logout } = useAuth();
  // const [loading, setLoading] = useState(true);

  // if(loading){
  //   return (
  //     <div className='min-h-screen flex justify-center items-center'>
  //       <h2>Cargado...</h2>
  //     </div>
  //   )
  // }

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacienteProvider>

          <AppRouter />
        </PacienteProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App  