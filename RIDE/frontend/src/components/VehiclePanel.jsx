import React from 'react'

function VehiclePanel({ setVehiclePanel, setConfirmRidePanel }) {
    return (
        <div>
            <h4 onClick={() => { setVehiclePanel(false) }} className='text-center w-full  font-normal -mt-3 '><i className="ri-arrow-down-wide-line text-3xl text-gray-500"></i></h4>
            <h3 className='text-2xl font-bold mb-5'>Choose a Vehicle</h3>

            <div onClick={() => {
                setConfirmRidePanel(true)
                setVehiclePanel(false)
            }} className='flex items-center border-2 border-gray-200  active:border-black justify-between p-2 mb-3 gap-1 w-full rounded-xl'>
                <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className='ml-1 w-1/2'>
                    <h4 className='text-lg font-semibold'>RideGo <span><i className="ri-user-line"></i>4</span></h4>
                    <h5 className='text-base font-medium'>2 min away</h5>
                    <h5 className='text-xs font-normal text-gray-600'>Affordable,compact rides</h5>
                </div>
                <h2 className='text-2xl font-semibold'> ₹193.20</h2>
            </div>
            <div onClick={() => {
                setConfirmRidePanel(true)
                setVehiclePanel(false)
            }} className='flex items-center border-2 border-gray-200  active:border-black justify-between p-2 mb-3 gap-1 w-full rounded-xl'>
                <img className='h-14' src="https://rb.gy/p51ss4" alt="" />
                <div className='ml-4  w-1/2'>
                    <h4 className='text-lg font-semibold'>Moto <span><i className="ri-user-line"></i>1</span></h4>
                    <h5 className='text-base font-medium'>3 min away</h5>
                    <h5 className='text-xs font-normal text-gray-600'>Affordable motorcycles rides</h5>
                </div>
                <h2 className='text-2xl font-semibold'> ₹65.17</h2>
            </div>
            <div onClick={() => {
                setConfirmRidePanel(true)
                setVehiclePanel(false)
            }} className='flex items-center border-2 border-gray-200  active:border-black justify-between p-2 mb-3 gap-1 w-full rounded-xl'>
                <img className='h-14' src="https://rb.gy/1xnk9s" alt="" />
                <div className='w-1/2'>
                    <h4 className='text-lg font-semibold'>Auto <span><i className="ri-user-line"></i>4</span></h4>
                    <h5 className='text-base font-medium'>5 min away</h5>
                    <h5 className='text-xs font-normal text-gray-600'>Affordable auto rides</h5>
                </div>
                <h2 className='text-2xl font-semibold'> ₹118.21</h2>
            </div>

        </div>
    )
}

export default VehiclePanel
