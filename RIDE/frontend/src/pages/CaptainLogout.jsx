import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CaptainLogout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status == 200){
            localStorage.removeItem('token');
            navigate('/captain-login')
            console.log("logout successfully");
        }
    })
  return (
    <div>
      <h1>captain logout</h1>
    </div>
  )
}

export default CaptainLogout
