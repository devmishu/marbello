import Image from 'next/image';
import React from 'react';

const TileDetailCard = ({ image, title, creator, styleDescription, tags, material, dimensions, category, inStock,currency,price }) => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">
            <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center p-8 ">
                
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-full h-auto object-center object-cover rounded-lg shadow-sm"
                />
            </div>

            
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                    {title}
                </h1>

                <span className='text-xl font-semibold '>Creator: {" "}{creator}</span>

                <div className='flex gap-3 mt-2  items-center'>
                    <span className='text-xl font-semibold '>Tags:</span>
                    {
                        tags.map((tag, index) => <span
                            key={index}
                            className="badge badge-sm badge-primary"
                        >{tag}</span>
                        )
                    }
                </div>

                <div className="mt-3">
                    <p className="text-3xl text-[#4f46e5] font-semibold">${price} <span className="text-sm text-gray-500 font-normal">/ per sq meter</span></p>
                </div>

                
                <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900">Description</h3>
                    <div className="mt-2 text-base text-gray-600 leading-relaxed">
                        {styleDescription}
                    </div>
                </div>

                
                <div className="mt-10 border-t border-gray-200 pt-8">
                    <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
                    <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Material</p>
                            <p className="mt-1 text-sm text-gray-900 font-medium">{material}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Dimensions</p>
                            <p className="mt-1 text-sm text-gray-900 font-medium">{dimensions}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Category</p>
                            <p className="mt-1 text-sm text-gray-900 font-medium uppercase">{category}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Stock Status</p>
                            <p className="mt-1 text-sm text-green-600 font-medium">{inStock ? "In Stock" : "Out of Stock"}</p>
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button className="flex-1 bg-primary text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-[#4338ca] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:ring-offset-2 hover:cursor-pointer">
                        Buy Now
                    </button>
                    <button className="flex-1 bg-white text-primary border-2 border-primary py-4 px-8  font-bold text-lg hover:bg-indigo-50 transition-colors hover:cursor-pointer rounded-full">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TileDetailCard;