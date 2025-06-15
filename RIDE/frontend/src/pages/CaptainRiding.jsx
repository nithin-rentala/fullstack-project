import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide';

function CaptainRiding() {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])
  return (
    <div className='h-screen '>
      <div className='fixed flex justify-between items-center w-screen top-0 p-4'>
        <h2 className='text-4xl font-bold'>Ride</h2>
        <Link to='/captain-login'><i className="ri-logout-box-line text-2xl font-semibold"></i></Link>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div onClick={() => {
        setFinishRidePanel(true)
      }} className='h-1/5 p-4 bg-yellow-400 flex justify-between items-center '>
        <h5 className='fixed left-40 bottom-23 text-gray-500 text-3xl'><i className="ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 Kms away</h4>
        <button className='flex items-center justify-center bg-[#10b461] text-white p-3 px-10 rounded  font-semibold'>Finish Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 px-3 py-6  bg-white w-full translate-y-full   '>
        <FinishRide setFinishRidePanel={setFinishRidePanel}></FinishRide>
      </div>
    </div>
  )
}

export default CaptainRiding
