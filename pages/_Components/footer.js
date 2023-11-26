import Link from "next/link"
import Image from "next/image"
import pay from "public/pay.png"
export default function Footer() {
  return(
    <>
      <div className="mt-10 flex flex-col items-center py-5 bg-slate-100 w-full">
          <Link className="pb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[26px] select-none"href="/">SHOPPINFREAK™</Link>
          <p className="text-neutral-500 flex justify-center text-sm">For Deals upto 75% OFF</p>
          <div className="my-10 space-y-5 text-neutral-500">
          
            <p className="flex justify-center items-center font-bold">SHOP</p>    
            <p className="flex justify-center items-center">Clothes</p>    
            <p className="flex justify-center items-center">Jewelery</p>    
            <p className="flex justify-center items-center">Trending</p>  
          <div className="space-y-5 text-neutral-500">
          
            <p className="flex justify-center items-center font-semibold">PRIVACY AND POLICIES</p>    
            <p className="flex justify-center items-center">Terms and Conditions</p>    
            <p className="flex justify-center items-center">Privacy</p>    
        <div>
        <Image className="flex justify-center items-center h-48 w-80" src={pay} alt="pay.png"/>
        </div>
          </div>
      </div>
      </div>
    </>
    )
}