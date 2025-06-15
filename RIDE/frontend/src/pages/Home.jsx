import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

function Home() {

  const pickup = useRef(null);
  const destination = useRef(null);

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const arrowRef = useRef(null);

  const [vehiclePanel,setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRidePanel,setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [lookingForDriver,setLookingForDriver] = useState(false);
  const lookingForDriverRef = useRef(null);

  const [waitingForDriver,setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        padding: '24'
      })
      gsap.to(arrowRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0',
        opacity: 0,
        padding: 0
      })
      gsap.to(arrowRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
    
  },[vehiclePanel])


  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(lookingForDriver){
      gsap.to(lookingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(lookingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[lookingForDriver])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])



  return (
    <div className='h-screen relative overflow-hidden'>
      <div className='absolute top-3 left-3'>
        <h2 className='ml-6 mt-7 mb-8 text-4xl font-bold'>Ride</h2>
      </div>

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-6 rounded-lg relative'>
          <h5 ref={arrowRef} onClick={() => { setPanelOpen(false) }} className='absolute opacity-0 right-10  font-semibold'><i className="ri-arrow-down-wide-line text-gray-500 text-3xl"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Find a trip</h3>
          <form onClick={(e) => handleSubmit(e)}>
            <div className='line absolute bg-black h-16 w-1 top-[49%] left-10'></div>
            <input
              ref={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              className='w-full bg-[#eee] px-12 py-2 text-lg rounded-lg mb-3 '
              type="text"
              placeholder='Add a Pickup Location' />
            <input
              ref={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              className='w-full bg-[#eee] px-12 py-2 text-lg rounded-lg'
              type="text"
              placeholder='Enter your destination' />
          </form>
        </div>
        <div className='bg-white h-0 ' ref={panelRef}>
          <LocationSearchPanel setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen}></LocationSearchPanel>
        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 px-3 py-6  bg-white w-full translate-y-full'>
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}></VehiclePanel>
      </div>

      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 px-3 py-6  bg-white w-full translate-y-full'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setLookingForDriver={setLookingForDriver}></ConfirmRide>
      </div>

      <div ref={lookingForDriverRef} className='fixed z-10 bottom-0 px-3 py-6  bg-white w-full translate-y-full'>
        <LookingForDriver setLookingForDriver={setLookingForDriver}></LookingForDriver>
      </div>

      <div ref={waitingForDriverRef}  className='fixed z-10 bottom-0 px-3 py-6  bg-white w-full'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} ></WaitingForDriver>
      </div>


    </div>
  )
}

export default Home
