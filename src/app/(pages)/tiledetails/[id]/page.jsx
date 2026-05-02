import TileDetailCard from '@/components/ui/TileDetailCard';
import { getTileById } from '@/lib/api/getTileById';
import React from 'react';

const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    const tileDetails = await getTileById(id);


    return (
        <div className="container mx-auto px-5 min-h-screen bg-gray-50 font-sans">

            <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <TileDetailCard
                    image={tileDetails.image}
                    title={tileDetails.title}
                    creator={tileDetails.creator}
                    styleDescription={tileDetails.styleDescription}
                    tags={tileDetails.tags}
                    material={tileDetails.material}
                    dimensions={tileDetails.dimensions}
                    category={tileDetails.category}
                    inStock={tileDetails.inStock}
                />
            </main>
        </div>
    );
};

export default TileDetailsPage;





category
:
"porcelain"
currency
:
"USD"
description
:
"Elegant matte porcelain tile with smooth texture"
dimensions
:
"80x80 cm"
featured
:
true
id
:
"tile_002"
image
:
"https://merbelloapi.onrender.com/images/tile_002.jpg"
inStock
:
true
material
:
"Porcelain"
price
:
52.5


