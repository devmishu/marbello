"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const curentPath = usePathname();
    return (
        <div>
            <Link href={href} className={`${href === curentPath && "bg-primary rounded-full font-bold text-white py-1 px-3"}`}>{children}</Link>
        </div>
    );
};

export default NavLink;