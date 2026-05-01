import TilesCard from '@/components/ui/TilesCard';
import { getAllTiles } from '@/lib/api/getAllTiles';
import React from 'react';

const AlltilesPage = async () => {
    const allTiles = await getAllTiles();

    return (
        <div>
            <div className="join w-full flex ">
                <div className='flex-1'>
                    <label className="input validator join-item w-full">

                        <input type="text" placeholder="search" className="w-full" required />
                    </label>

                </div>
                <button className="btn btn-primary rounded-e-sm  ">Search</button>
            </div>


        
            <h2 className='text-3xl font-bold mb-5 mt-15 '>All Tiles</h2>

            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {
                    allTiles.map(at => <TilesCard
                        key={at.id}
                        title={at.title}
                        id={at.id}
                        image={at.image}
                    />)
                }
            </div>

        </div>
    );
};

export default AlltilesPage;