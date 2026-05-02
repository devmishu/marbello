
import NoSearchResults from '@/components/ui/NoSearchResults';
import SearchTile from '@/components/ui/SearchTile';
import TilesCard from '@/components/ui/TilesCard';
import { getAllTiles } from '@/lib/api/getAllTiles';
import React from 'react';


export const metadata = {
    title: "merbello | all tils page",
    description: "merbello app ",
};

const AlltilesPage = async ({ searchParams }) => {

    const sp = await searchParams;
    console.log(sp);

    const allTiles = await getAllTiles(sp?.title_like);
    console.log("All tiles", allTiles);

    return (
        <div className='container mx-auto px-5'>
            <SearchTile />

            <h2 className='text-3xl font-bold mb-5 mt-15 '>All Tiles</h2>

            {
                allTiles?.length <= 0 ? <NoSearchResults /> :
                    <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                        {
                            allTiles?.map(at => <TilesCard
                                key={at.id}
                                title={at.title}
                                id={at.id}
                                image={at.image}
                            />)
                        }
                    </div>
            }


        </div>
    );
};

export default AlltilesPage;