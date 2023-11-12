import Image from "next/image"
import Header from "../Hamburger.js"
import Link from "next/link"
import cart from "public/cart.svg"
import { signOut } from 'next-auth/react';
export default function Navbar({session}) {
   return(
     <>
         <div className="flex items-center justify-between bg-slate-100 py-3 fixed top-0 z-[9999] w-full">
     <Header className="" src={session?.user?.image} title={session?.user?.name}/>
    <Link className="pr-16 mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[15px] select-none"href="/">SHOPPINFREAK</Link>
    <Link href="/cart">
    <Image className="mt-1.5" height={32} width ={25} src={cart}></Image>
    </Link>
    <Image className="rounded-full" src={session?.user?.image} height={25} width={35} alt="img"/>
    <button onClick={()=>signOut()} className="text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] px-3 py-2 mr-1">Log out</button>
   </div>
     
    </> 
     )
}