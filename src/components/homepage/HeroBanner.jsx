import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <div className="relative min-h-[60vh] hero -mt-10 bg-[url('/images/herobanner2.png')] bg-center bg-cover">

            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

            <div className="hero-content text-center relative z-10">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-white">
                        Discover Your Perfect Aesthetic
                    </h1>

                    <p className="py-6 text-gray-200">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>

                    <Link href="/alltiles">
                        <button className="btn btn-primary">Browse Now</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;