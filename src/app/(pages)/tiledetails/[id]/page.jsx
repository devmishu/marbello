import { getTileById } from '@/lib/api/getTileById';
import React from 'react';

const TileDetailsPage = async ({ params }) => {
    const {id} = await params;
    const tileDetails = await getTileById(id);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navigation Space - Just for layout consistency */}
            <nav className="h-16 bg-white border-b border-gray-100 flex items-center px-8">
                <span className="text-[#4f46e5] font-bold text-xl tracking-tight">MERBELLO</span>
            </nav>

            <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">

                    {/* Image Section */}
                    <div className="w-full rounded-2xl overflow-hidden bg-[#f3f4f6] flex items-center justify-center p-8 border border-gray-100">
                        {/* 
                Placeholder Image based on your theme. 
                In your real project, replace this src with your specific tile image link.
            */}
                        <img
                            src="https://www.rubi.com/us/blog/wp-content/uploads/2018/03/marble.jpg"
                            alt="Ceramic Blue Tile"
                            className="w-full h-auto object-center object-cover rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Details Content Section */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                            {tileDetails.title}
                        </h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-[#4f46e5] font-semibold">$45.99 <span className="text-sm text-gray-500 font-normal">/ per sq meter</span></p>
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">Description</h3>
                            <div className="mt-2 text-base text-gray-600 leading-relaxed">
                                A premium ceramic tile with a smooth blue glaze finish that brings a calm and elegant look to any interior space.
                                Its polished surface reflects light beautifully, making rooms feel brighter and more spacious.
                                Ideal for modern kitchens, bathrooms, and feature walls. Crafted for durability, easy maintenance, and long-lasting everyday use.
                            </div>
                        </div>

                        {/* Specifications Table */}
                        <div className="mt-10 border-t border-gray-200 pt-8">
                            <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
                            <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-4">
                                <div className="bg-white p-3 rounded-lg border border-gray-100">
                                    <dt className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Material</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-medium">Ceramic</dd>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-100">
                                    <dt className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Dimensions</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-medium">60x60 cm</dd>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-100">
                                    <dt className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Category</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-medium uppercase">Ceramic</dd>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-100">
                                    <dt className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Stock Status</dt>
                                    <dd className="mt-1 text-sm text-green-600 font-medium">In Stock</dd>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button className="flex-1 bg-[#4f46e5] text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-[#4338ca] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:ring-offset-2">
                                Buy Now
                            </button>
                            <button className="flex-1 bg-white text-[#4f46e5] border-2 border-[#4f46e5] py-4 px-8 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TileDetailsPage;