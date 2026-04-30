import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24 text-center font-sans">


            <h1 className="text-9xl font-extrabold text-primary tracking-widest">
                404
            </h1>


            <div className="bg-primary  px-2 text-sm rounded rotate-12 absolute mb-20 text-white">
                Page Not Found
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Something is missing.
                </h2>

                <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto">
                    The tile collection or the page you are looking for has been moved or doesn't exist.
                    Let's get you back to designing your space!
                </p>
            </div>



            <button className='btn btn-primary mt-10'>
                <Link href="/">Return to Homepage</Link>
            </button>


        </div>
    );
}
export default NotFound;