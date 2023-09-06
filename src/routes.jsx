import {Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/signup/index';
import PatientPage from './Pages/signup/patient';
import NutritionistPage from './Pages/signup/nutritionist';
import InicialPage from './Pages/InicialPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<InicialPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/signup/patient' element={<PatientPage/>}/>
      <Route path='/signup/nutritionist' element={<NutritionistPage/>}/>
    </Routes>
  )
}
export default Router;