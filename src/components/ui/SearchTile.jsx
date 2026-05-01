"use client"
import { Search } from "lucide-react";
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

        <div className="join w-full flex relative border-gray-200 shadow-sm overflow-hidden rounded-full outline-none    ">
            <input
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="search tiles by title..."
                className="w-full outline-none input input-bordered join-item pl-10 pr-20 rounded-full"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-49">
                <Search /> 
            </div>
            <button
                onClick={handleSearch}
                className="z-49 btn btn-primary rounded-full join-item absolute right-0 top-0 h-full"
            >
                Search
            </button>
        </div>

    );
};

export default SearchTile;