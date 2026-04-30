import { getFeaturedTiles } from '@/lib/api/getFeaturedTiles';
import React from 'react';
import TilesCard from '../ui/TilesCard';

const FeaturedTiles = async () => {
    const featuredTiles = await getFeaturedTiles();

    return (
        <div>
            <h2 className='text-3xl font-bold mb-5 mt-15 '>Featured Tiles</h2>
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {
                    featuredTiles.map(ft => <TilesCard
                        key={ft.id}
                        image={ft.image}
                        title={ft.title}
                        id={ft.id}
                    />

                    )
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;