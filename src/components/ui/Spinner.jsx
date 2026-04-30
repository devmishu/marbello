import React from 'react';
import { RingLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='min-h-[80vh] flex justify-center items-center '>
            <RingLoader
                color="#0000FF"
                size={70}
                speedMultiplier={1}
            />
        </div>
    );
};

export default Spinner;