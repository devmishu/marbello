import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestUpdate = () => {

    const newArrivals = [
        {
            id: 1,
            tileName: "Lush Green Marble",
            tag: "New Arival"
        },
        {
            id: 2,
            tileName: "Modern Geometric Patterns",
            tag: "Weekly Feature"
        },
        {
            id: 3,
            tileName: "Ocean Teal Subway Tile",
            tag: "New Arival"
        },
        {
            id: 4,
            tileName: "Terracotta Rustic Tile",
            tag: "Weekly Feature"
        }
    ];

    return (
        <div className=' bg-neutral py-4 px-2 flex text-white  mt-10 items-center '>
            <div className=' text-white text-xl rounded-sm font-semibold  min-w-40 '>
                <span> Latest Updates:</span>
            </div>
            <div className='flex-1 overflow-hidden'>
                <Marquee pauseOnHover>
                    {newArrivals.map((item) => (
                        <span key={item.id}>
                            {item.tag}: {item.tileName}  | {" "}
                        </span>
                    ))}
                    {" "} Join the Community for more updates...
                </Marquee>
            </div>
        </div>
    );
};

export default LatestUpdate;