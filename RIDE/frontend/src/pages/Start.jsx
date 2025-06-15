import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover  bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex justify-between flex-col  pt-8  '>
        <h2 className='ml-8 text-5xl font-bold'>Ride</h2>
        <div className='bg-white px-7 py-7  pb-8  '>
          <h2 className='text-2xl font-bold'>Get Started With Ride</h2>
          <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3  rounded-lg  mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start