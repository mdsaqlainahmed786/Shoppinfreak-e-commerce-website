import Link from "next/link"
import Image from "next/image"
import cart from "public/cart.svg"
import Header from "./Hamburger.js"
import dp from "public/Dp.jpg"
export default function Home() {
  return (
    <>
    <main>
    <div className="flex space-x-3 bg-slate-100 py-3">
     <Header/>
    <Link className="pr-20 mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[15px] select-none"href="/">SHOPPINFREAK</Link>
    <Image className="mt--2 h-8 w-5" src={cart}></Image>
    <Image className="rounded-full h-7 w-7" src={dp}></Image>
    <button className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] px-3 py-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700 mr-1">Log out</button>
   
   </div>
   
    </main>
    </> 
  )
}
