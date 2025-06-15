import React from 'react';

function LocationSearchPanel({ setVehiclePanel, setPanelOpen }) {
    const locations = [
        '11/200,CarStreet,Near Narasimha Swamy Temple,Kadiri,AndhraPradesh',
        '11/201,Revenue Colony,Near Church Street,Kadiri,AndhraPradesh',
        '11/190,Narayana School,Near Petrol Bunk,Kadiri,AndhraPradesh',
        '11/210,Near BusStand,Side of Laxmi Temple,Kadiri,AndhraPradesh'
    ];

    return (
        <div>
            {locations.map((location, index) => (
                <div onClick={() => {
                    setVehiclePanel(true)
                    setPanelOpen(false)
                }
                } key={index} className='flex items-center justify-start gap-4 my-1 border-2  rounded-lg p-2 border-gray-100  active:border-black '>
                    <h4 className=' h-8 w-12 rounded-full flex justify-center items-center bg-[#eee]'>
                        <i  className="ri-map-pin-fill "></i>
                    </h4>
                    <h4 className='font-medium'>{location}</h4>
                </div>
            ))}
        </div>
    );
}

export default LocationSearchPanel;
