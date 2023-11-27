import { signIn } from "next-auth/react";
import LoadingBar from 'react-top-loading-bar';
import Image from "next/image";
import backpic from "public/men.jpeg";
import { useState, useEffect } from "react";

export default function Login() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
    document.body.style.overflow = 'hidden'; // Add this line to prevent scrolling
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="relative w-full h-screen overflow-hidden touch-none">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
          src={backpic}
          alt="img"
        />
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-serif text-[15px] text-white">Login to</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[35px] select-none">SHOPPINFREAK</p>
          <p className="text-white text-[18px] font-thin">For Deals up to 75% OFF</p>
        </div>
  <div className="absolute w-full h-36 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-t from-black to-transparent">
          <button onClick={()=>signIn('google')} type="button" className="text-red-400 bg-transparent border-red-400 border-2 hover:bg-red-400/90 focus:ring-4 focus:ring-red-400/50 focus:text-white hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mb-2 mt-7">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Login in with Google
</button>
</div>
        <div className="flex items-center justify-center bg-gray-600/60 backdrop-filter backdrop-blur-md fixed w-full bottom-0 py-2">
        <p className="text-[10px] text-white">Images in this website are subjected to Copy Right®</p>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
