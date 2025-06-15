import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

function UserSignup() {
  const email = useRef('');
  const password = useRef('');
  const firstname = useRef('');
  const lastname = useRef('');

  const navigate = useNavigate();
  const {user,setUser} = useContext(userDataContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = ({
      fullname: {
        firstname: firstname.current.value,
        lastname: lastname.current.value
      },
      email: email.current.value,
      password: password.current.value
    })

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if(response.status == 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }


    firstname.current.value = '';
    lastname.current.value = '';
    email.current.value = '';
    password.current.value = '';
  }

  return (
    <div>
      <div>
        <h2 className='ml-6 mt-7 mb-8 text-4xl font-bold'>Ride</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className='text-lg font-medium mb-3 ml-8'>What's Your Name</h3>
          <div className='flex gap-3 mb-5'>
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
          <h3 className='text-lg font-medium mb-3 ml-6'>What's Your E-mail</h3>
          <input type="email"
            required
            ref={email}
            className='px-4 py-2 rounded bg-[#eeeeee] w-80 ml-6 mb-5  text-lg placeholder:text-base'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-3 ml-6'>Enter Password</h3>
          <input type="password"
            required
            ref={password}
            className='px-4 py-2 rounded bg-[#eeeeee] w-80 ml-6 mb-5  text-lg placeholder:text-base'
            placeholder='password'
          />
          <button className='bg-[#111] text-white py-2 px-4  rounded  font-semibold mb-4 w-80 ml-6' >Create Account</button>
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

export default UserSignup
