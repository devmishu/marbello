import Link from 'next/link';
import React from 'react';

const TilesCard = ({ image, title, id }) => {


    return (
        <div className="card bg-base-100  shadow-sm p-2">
            <figure className="px-5 pt-5">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="card-actions">
                    <Link href={`tiledetails/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;