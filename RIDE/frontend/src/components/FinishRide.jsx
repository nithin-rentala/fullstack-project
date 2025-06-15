import React from 'react'
import { Link } from 'react-router-dom'

function FinishRide({setFinishRidePanel}) {
    return (
        <div>
            <h4 onClick={()=>{
                setFinishRidePanel(false)
            }} className='text-center w-full  font-normal -mt-3 '><i className="ri-arrow-down-wide-line text-3xl text-gray-500"></i></h4>

            <h3 className='text-2xl font-bold mb-5'>Finish Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-300 rounded-lg'>
                <div className='flex items-center justify-between gap-5 '>
                    <img className='w-10 h-10  rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdoay7VbsVZzZ1bZkX4k0T77hp5sb_ciXdQ&s" alt="" />
                    <h4 className='text-lg font-'>Rentala Nithin</h4>
                </div>
                <h4 className='text-lg font-semibold'>2.2 Kms</h4>
            </div>

            <div className='flex flex-col justify-between items-center gap-3'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-7 border-b-1 border-gray-400 p-3'>
                        <h4><i className="ri-map-pin-3-fill text-xl"></i></h4>
                        <div>
                            <h3 className='text-xl font-semibold '>562/11-A</h3>
                            <p className='text-base text-gray-600'>Kaikondrahalli,Bengaluru,Karnataka</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 border-b-1 border-gray-400 p-3'>
                        <h4><i className="ri-map-pin-user-fill text-xl"></i></h4>
                        <div>
                            <h3 className='text-xl font-semibold '>562/11-A</h3>
                            <p className='text-base text-gray-600'>Kaikondrahalli,Bengaluru,Karnataka</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7  p-3'>
                        <h4><i className="ri-money-rupee-circle-line text-xl"></i></h4>
                        <div>
                            <h3 className='text-xl font-semibold '>193.80</h3>
                            <p className='text-base text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>

                <Link to='/captain-home' className=' flex items-center justify-center bg-[#10b461] text-white py-2 px-4 rounded  font-semibold w-80 mb-2 '>Finish Ride</Link>


            </div>
        </div>
    )
}

export default FinishRide
