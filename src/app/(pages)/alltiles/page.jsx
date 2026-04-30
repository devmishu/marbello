import TilesCard from '@/components/ui/TilesCard';
import { getAllTiles } from '@/lib/api/getAllTiles';
import React from 'react';

const AlltilesPage = async () => {
    const allTiles = await getAllTiles();
    console.log(allTiles);
    return (
        <div>
            <h2 className='text-3xl font-bold mb-5 mt-15 '>All Tiles</h2>

            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {
                    allTiles.map(at => <TilesCard
                        key={at.id}
                        title={at.title}
                        id={at.id} 
                    />)
                }
            </div>

        </div>
    );
};

export default AlltilesPage;