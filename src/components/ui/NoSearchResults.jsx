import Link from "next/link";


const NoSearchResults = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[400px]">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                No Results Found
            </h2>

            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
                We couldn't find any tiles matching your criteria. Try adjusting your filters or explore our latest arrivals
            </p>

            <Link href={'/alltiles'}>
                <button
                    className="mt-5 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:cursor-pointer transition-all shadow-md active:scale-95"
                >
                    Explore Our Collections
                </button>
            </Link>
        </div>
    );
};

export default NoSearchResults;