import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { captainDataContext } from "../context/CaptainContext";
import axios from 'axios'


function CaptainLogin() {
  const email = useRef('');
  const password = useRef('');

  const {captain,setCaptain} = useContext(captainDataContext);
  const navigate = useNavigate();

  const handleSubmit =async(e) => {
    e.preventDefault();
    const captain =({
      email: email.current.value,
      password: password.current.value
    })

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain);

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        console.log("Login successful, data:", data);
        
        setCaptain(data);
        localStorage.setItem('token', data.token);
  
        navigate('/captain-home');
        console.log("Navigating to Captain Home...");
      }

    email.current.value = '';
    password.current.value = '';
  }
  return (
    <div>
      <div >
        <h2 className='ml-8 mt-10 mb-8 text-5xl font-bold'>-Ride</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className='text-lg font-medium mb-3 ml-8'>What's Your E-mail</h3>
          <input type="email"
            required
            ref={email}
            className='px-4 py-2 rounded bg-[#eeeeee] w-80 ml-8 mb-7  text-lg placeholder:text-sm'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-3 ml-8'>Enter Password</h3>
          <input type="password"
            required
            ref={password}
            className='px-4 py-2 rounded bg-[#eeeeee] w-80 ml-8 mb-7  text-lg placeholder:text-sm'
            placeholder='password'
          />
          <button className='bg-[#111] text-white py-2 px-4  rounded  font-semibold mb-4 w-80 ml-8' >Login</button>
        </form>
        <p className='ml-5 0 text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>

      <div>
        <Link to='/login' className=' flex items-center justify-center bg-[#d5622d] text-white py-2 px-4  rounded  font-semibold mb-7 w-80 ml-8 mt-35' >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
