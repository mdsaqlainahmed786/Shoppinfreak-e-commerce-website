import Image from "next/image"
import Header from "../Hamburger.js"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import cart from "public/cart.svg"
import logout from "public/Logout.png"
import { signOut } from 'next-auth/react';
export default function Navbar({session, items})
{
 const getOut = () =>{
   signOut()
toast.success('Logged Out!', {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
 }
   return(
     <>
         <div className="flex items-center justify-between bg-slate-100 py-3 fixed top-0 z-[99999] w-full">
     <Header className="" src={session?.user?.image} title={session?.user?.name}/>
    <Link className="pr-11 -ml-3 mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 font-medium text-[18px] select-none"href="/">SHOPPINFREAK</Link>
    <Link href="/Cart">
     
    <div className="relative">
    <Image className="mt-1 transform -scale-x-100" height={35} width ={30} src={cart}/>
      <div className="w-4 h-4 absolute rounded-full bg-red-600 -top-1"><p className="text-[8px] text-white ml-1.5 mt-[3px]">{items}</p>
    </div>
    </div>
    

    </Link>
    <Image className="rounded-full -mr-3" src={session?.user?.image} height={25} width={35} alt="img"/>
   <button onClick={()=>getOut()} className="text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] px-3 py-2 mr-1"><Image src={logout} className="h-4 w-4 inline mr-1" alt=".."/>Log out</button>

</div>

 
     
    </> 
     )
}
{/*className={`flex items-center space-x-2 px-4 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-l-4 border-white*/}