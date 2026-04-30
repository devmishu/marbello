import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrivals = () => {
    return (
        <div className='bg-neutral py-2 px-2 flex text-white rounded-sm mt-10 items-center'>
            <div className=' text-white text-xl p-2 rounded-sm font-semibold '>
                <span> New Arival:</span>
            </div>
            <div>
                <Marquee className='font-medium flex '>
                    <p>Lkioouioi  hfgh</p>
                </Marquee>
            </div>
        </div>
    );
};

export default NewArrivals;