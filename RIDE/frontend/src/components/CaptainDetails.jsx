import React from 'react'

function CaptainDetails() {
    return (
        <div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-between items-center gap-7'>
                    <img className='w-10 h-10  rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdoay7VbsVZzZ1bZkX4k0T77hp5sb_ciXdQ&s" alt="" />
                    <div>
                        <h4 className='text-lg font-medium'>Rentala Nithin</h4>
                        <p className='text-sm text-gray-500'>Basic level</p>
                    </div>

                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹267.45</h4>
                    <p className='text-sm text-gray-500'>Earned</p>
                </div>
            </div>


            <div className='flex justify-evenly items-start mt-7 bg-gray-100 rounded-xl p-4 gap-5'>
                <div className='text-center'>
                    <h5><i className="ri-timer-2-line text-3xl font-thin"></i></h5>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-500'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <h5><i className="ri-speed-up-line text-3xl font-thin"></i></h5>
                    <h5 className='text-lg font-medium'>30Kms</h5>
                    <p className='text-sm text-gray-500'>Total distance</p>
                </div>
                <div className='text-center'>
                    <h5><i className="ri-booklet-line text-3xl font-thin"></i></h5>
                    <h5 className='text-lg font-medium'>20</h5>
                    <p className='text-sm text-gray-500'>Total jobs</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
