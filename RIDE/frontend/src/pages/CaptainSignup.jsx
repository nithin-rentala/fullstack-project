import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { captainDataContext } from '../context/CaptainContext';

function CaptainSignup() {
  const email = useRef('');
  const password = useRef('');
  const firstname = useRef('');
  const lastname = useRef('');
  const vehicleColor = useRef('');
  const vehiclePlate = useRef('');
  const vehicleCapacity = useRef('');
  const vehicleType = useRef('');

  const {captain,setCaptain} = useContext(captainDataContext);
  const navigate = useNavigate();


  const handleSubmit =async (e) => {
    e.preventDefault();
    const newCaptain = ({
      fullname: {
        firstname: firstname.current.value,
        lastname: lastname.current.value
      },
      email: email.current.value,
      password: password.current.value,
      vehicle:{
        color:vehicleColor.current.value,
        plate:vehiclePlate.current.value,
        capacity:vehicleCapacity.current.value,
        vehicleType:vehicleType.current.value
      }
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,newCaptain);
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.user);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
    }

    firstname.current.value = '';
    lastname.current.value = '';
    email.current.value = '';
    password.current.value = '';
    vehicleColor.current.value = '';
    vehiclePlate.current.value = '';
    vehicleCapacity.current.value = '';
    vehicleType.current.value = '';
  }

  return (
    <div>
      <div>
        <h2 className='ml-6 mt-3 mb-4 text-4xl font-bold'>-Ride</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className='text-lg font-medium mb-3 ml-8'>What's our Captain's Name</h3>
          <div className='flex gap-3 mb-3'>
            <input type="text"
              required
              ref={firstname}
              className='px-4 py-2 rounded bg-[#eeeeee] w-40  ml-6  text-lg placeholder:text-base'
              placeholder='first name'
            />
            <input type="text"
              required
              ref={lastname}
              className='px-4 py-2 rounded bg-[#eeeeee] w-40 text-lg placeholder:text-sm'
              placeholder='last name'
            />
          </div>
          <h3 className='text-lg font-medium mb-2 ml-6'>What's our Captain's E-mail</h3>
          <input type="email"
            required
            ref={email}
            className='px-4 py-2 rounded bg-[#eeeeee] w-80 ml-6 mb-5  text-lg placeholder:text-base'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2 ml-6'>Enter Password</h3>
          <input type="password"
            required
            ref={password}
            className='px-4 py-2 rounded bg-[#eeeeee] w-80 ml-6 mb-5  text-lg placeholder:text-base'
            placeholder='password'
          />

          <h3 className='text-lg font-medium mb-2 ml-6'>Vehicle Information</h3>
          <div className='flex gap-3 mb-5'>
            <input type="text"
              required
              ref={vehicleColor}
              className='px-4 py-2 rounded bg-[#eeeeee] w-40  ml-6  text-lg placeholder:text-base'
              placeholder='Vehicle Color'
            />
            <input type="text"
              required
              ref={vehiclePlate}
              className='px-4 py-2 rounded bg-[#eeeeee] w-40 text-lg placeholder:text-sm'
              placeholder='Vehicle Plate'
            />
          </div>
          <div className='flex gap-3 mb-3'>
            <input type="number"
              required
              ref={vehicleCapacity}
              className='px-4 py-2 rounded bg-[#eeeeee] w-40  ml-6  text-lg placeholder:text-base'
              placeholder='Vehicle Capacity'
            />
            <select
            required
            ref={vehicleType}
            className='px-4 py-2 rounded bg-[#eeeeee] w-40  text-lg placeholder:text-base'
            >
              <option value="" disabled>Select VehicleType</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>

            </select>
          </div>


          <button className='bg-[#111] text-white py-2 px-4  rounded  font-semibold mb-4 w-80 ml-6' >Create Captain Account</button>
        </form>
        <p className='ml-5 0 text-center'>Already have an Account?<Link to='/login' className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
        <p className='text-[11px] leading-tight w-80 ml-8 mt-25'>This site is protected by reCAPTCHA and
          <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service is apply</span>.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
