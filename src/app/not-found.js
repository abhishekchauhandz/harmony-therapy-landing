import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-40 py-10 gap-10">
      <div className="flex justify-center items-center w-full md:w-[500px] h-[380px] w-[400px] h[300px] relative mb-10 md:mb-0">
        <Image 
          src="/assets/404-page.webp" 
          fill 
          objectFit="cover" 
          alt="page not found" 
        />
      </div>
      <div className="text-center md:text-left md:ml-10">
        <h1 className="text-4xl md:text-6xl font-bold">404</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-800">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/" 
          className="mt-6 inline-block bg-[#33C9D2] text-white px-4 py-2 rounded-md hover:bg-[#FFA05D] transition-all md:px-6 md:py-3"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
