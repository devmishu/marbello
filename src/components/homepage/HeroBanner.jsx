import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <div className="relative min-h-[60vh] hero -mt-10 bg-[url('/images/herobanner2.png')] bg-center bg-cover">

            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

            <div className="hero-content text-center relative z-10">
                <div className='max-w-90 sm:max-w-120 md:max-w-190'>
                    <h1 className=" text-[42px] sm:text-5xl md:text-7xl font-bold text-white shadow ">
                        Discover Your Perfect Aesthetic
                    </h1>

                    <p className="py-6 text-gray-200">
                        Transform your living spaces with our curated selection of premium tiles. From timeless marble to modern ceramics, discover the perfect blend of durability and aesthetic excellence.
                    </p>

                    <Link href="/alltiles">
                        <button className="btn btn-primary rounded-full">Browse Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;