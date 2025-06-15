import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUpPanel from '../components/ConfirmRidePopUpPanel'

function CaptainHome() {

  const [ridePopUpPanel,setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);

  const [confirmRidePopUpPanel,setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])

  return (
    <div className='h-screen'>

      <div className='fixed flex justify-between items-center w-screen top-0 p-4'>
        <h2 className='text-4xl font-bold'>Ride</h2>
        <Link to='/captain-login'><i className="ri-logout-box-line text-2xl font-semibold"></i></Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='h-2/5 p-4 rounded-[50px]'>
        <CaptainDetails></CaptainDetails>
      </div>

      <div ref={ridePopUpPanelRef}  className='fixed z-10 bottom-0 px-3 py-6  bg-white w-full translate-y-full '>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}></RidePopUp>
      </div>

      <div ref={confirmRidePopUpPanelRef} className='fixed z-10 bottom-0 px-3 py-6 h-screen  bg-white w-full translate-y-full   '>
        <ConfirmRidePopUpPanel setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}></ConfirmRidePopUpPanel>
      </div>

    </div>
  )
}

export default CaptainHome
