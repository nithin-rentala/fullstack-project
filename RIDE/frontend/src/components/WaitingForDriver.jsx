import React from 'react'

function WaitingForDriver({ }) {
    return (
        <div>
            <h4 onClick={() => {
                setWaitingForDriver(false)
            }} className='text-center w-full  font-normal -mt-3 '><i className="ri-arrow-down-wide-line text-3xl text-gray-500"></i></h4>
            <div className='flex items-center justify-between px-5 py-3'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Abhilash</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>AP02 AB 1456</h4>
                    <p className='text-gray-500 text-sm'>Maruthi Suzuki Alto</p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-3 '>
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
            </div>
        </div>
    )
}

export default WaitingForDriver
