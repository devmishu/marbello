import Link from 'next/link';
import React from 'react';

const Navmenu = () => {
    return (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/alltiles">All Tiles</Link>
            </li>
            <li>
                <Link href="/myprofile">My Profile</Link>
            </li>
        </>
    );
};

export default Navmenu;