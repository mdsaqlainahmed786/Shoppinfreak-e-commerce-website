import Image from "next/image"
import Header from "../Hamburger.js"
import Link from "next/link"
import cart from "public/cart.svg"
import logout from "public/Logout.png"
import { signOut } from 'next-auth/react';
export default function Navbar({session, items}) {
   return(
     <>
         <div className="flex items-center justify-between bg-slate-100 py-3 fixed top-0 z-[99999] w-full">
     <Header className="" src={session?.user?.image} title={session?.user?.name}/>
    <Link className="pr-11 -ml-5 mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[15px] select-none"href="/">SHOPPINFREAK</Link>
    <Link href="/Cart">
     
    <div className="relative">
    <Image className="mt-1" height={35} width ={30} src={cart}/>
      <div className="w-5 h-5 absolute rounded-full bg-red-600 -top-1"><p className="text-[8px] text-white ml-1.5 mt-[5px]">{items}</p>
    </div>
    </div>
    

    </Link>
    <Image className="rounded-full -mr-3" src={session?.user?.image} height={25} width={35} alt="img"/>
   <button onClick={()=>signOut()} className="text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] px-3 py-2 mr-1"><Image src={logout} className="h-4 w-4 inline mr-1" alt=".."/>Log out</button>

</div>

 
     
    </> 
     )
}
{/*className={`flex items-center space-x-2 px-4 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-l-4 border-white*/}