import {Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/signup/index';
import SplashPage from './Pages/signup/splash';
import InicialPage from './Pages/InicialPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<InicialPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/splash' element={<SplashPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
  )
}
export default Router;