import {signIn} from "next-auth/react"
import LoadingBar from 'react-top-loading-bar'
import Image from "next/image"
import backpic from "public/men.jpg"
import {useState,useEffect} from "react"
export default function Login() {
  const [progress, setProgress ] = useState(0)
  useEffect(()=>{
    setProgress(100)
  },[])
  return(
    <>
         <LoadingBar
       color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className="h-[600px] w-full">
    <Image  
    className="m-0 -mb-96 brightness-75 max-h-full max-w-full absolute" src={backpic}/>
    <div className="text-white top-[440px] relative bg-gradient-to-t from-black to-transparent h-72"><p className="font-serif flex justify-center text-[15px]">Login to</p>
      <p className="flex justify-center mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[35px] select-none">SHOPPINFREAK</p>
      <p className="-mt-3 text-white flex justify-center text-[18px] font-thin">For Deals upto 75% OFF</p>
    <button onClick={()=>signIn('google')} type="button" className="text-red-400 bg-transparent border-red-400 border-2 hover:bg-red-400/90 focus:ring-4 focus:ring-red-400/50 focus:text-white hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ml-24 mb-2 mt-7">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Sign in with Google
</button>
    </div>
    </div>
    </>
    )
}