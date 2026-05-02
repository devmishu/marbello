import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ image, title, id }) => {


    return (
        <div className="animate__animated animate__fadeIn card bg-base-100  shadow-sm p-2">
            <figure className="px-5 pt-5">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="card-actions">
                    <Link href={`tiledetails/${id}`}>
                        <button className="btn btn-primary rounded-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;