import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CaptainProtecterWrapper({children}) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
        }
    },[token])
  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtecterWrapper
