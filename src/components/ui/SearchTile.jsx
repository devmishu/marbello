"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchTile = () => {
    const [searchInput, setSearchInput] = useState("");

    const searhParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = () => {
        const params = new URLSearchParams(searhParams);

        if (searchInput) {
            params.set("title_like", searchInput);
        } else {
            params.delete("title_like");
        }

        router.push(`${pathname}?${params.toString()}`);
    }

    return (

        <div className="join w-full flex ">
            <div className='flex-1'>
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="search" className="w-full outline-none input  join-item" />
            </div>
            <button onClick={handleSearch} className="btn btn-primary rounded-e-sm  ">Search</button>
        </div>

    );
};

export default SearchTile;