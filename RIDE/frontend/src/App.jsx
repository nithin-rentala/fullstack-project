import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import Home from './pages/Home';
import UserProtecterWrapper from './pages/UserProtecterWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtecterWrapper from './pages/CaptainProtecterWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin></UserLogin>} />

      <Route path='/riding' element={<Riding></Riding>}></Route>
      <Route path='/captain-riding' element={<CaptainRiding></CaptainRiding>}></Route>

      <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
      <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
      <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}></Route>
      <Route path='/home' element={
        <UserProtecterWrapper>
          <Home></Home>
        </UserProtecterWrapper>
      }></Route>
      <Route path='/user/logout' element={
        <UserProtecterWrapper>
          <UserLogout></UserLogout>
        </UserProtecterWrapper>
      }></Route>
      <Route path='/captain-home' element={
        <CaptainProtecterWrapper>
          <CaptainHome></CaptainHome>
        </CaptainProtecterWrapper>
      }></Route>
      <Route path='/captain/logout' element={
        <CaptainProtecterWrapper>
          <CaptainLogout></CaptainLogout>
        </CaptainProtecterWrapper>
      }></Route>
    </Routes>
  )
}

export default App
