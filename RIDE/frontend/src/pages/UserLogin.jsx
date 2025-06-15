import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userDataContext } from '../context/UserContext';

export default function UserLogin() {
    const email = useRef('');
    const password = useRef('');
    const { user, setUser } = useContext(userDataContext);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: email.current.value,
            password: password.current.value
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

            if (response.status === 200) {
                const data = response.data;
                setUser(data);
                localStorage.setItem('token', data.token);
                navigate('/home');
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Login failed. Please check your credentials.");
        }


        email.current.value = '';
        password.current.value = '';
    };


    return (
        <div>
            <div >
                <h2 className='ml-8 mt-10 mb-10 text-5xl font-bold'>Ride</h2>
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
                <p className='ml-5 0 text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
            </div>
            <div>
                <Link to='/captain-login' className=' flex items-center justify-center bg-[#10b461] text-white py-2 px-4  rounded  font-semibold mb-7 w-80 ml-8 mt-35' >Sign in as Captain</Link>
            </div>
        </div>
    )
}
