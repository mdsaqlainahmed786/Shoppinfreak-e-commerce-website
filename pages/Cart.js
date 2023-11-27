import { useContext, useState, useEffect} from 'react'
import Navbar from "./Components/_nav"
import Image from "next/image"
import Login from "./login"
import Link from "next/link"
import Footer from "./Components/footer";
import angry from "public/angry.png"
import { useSession} from 'next-auth/react';
import { CartContext } from './Context/cart'
export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  const [progress, setProgress ] = useState(0)
    const { data: session, status } = useSession();
    if(!session) return <Login/>
  return (
    <>
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
    <Navbar session={session} items={cartItems.length}/>
    <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
  <h1 className="mt-11 mr-44 -ml-8 pb-1 border-b-4 border-orange-600 rounded-b-sm font-sans text-[25px] inline">Your Cart</h1>
          {cartItems.map((item) => (
                <div className="flex space-x-10 items-center hover:bg-gray-100 -mx-1 px-1 py-2 ml-6"> 
          <div className="flex w-2/5 -ml-5">
            <div className="w-24">
              <img className="h-20" src={item.image} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-3 flex-grow">
             <span className="-mr-24 font-bold">{item.title.slice(0, 32)}...</span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
          <div className="flex space-x-1.5 ml-16">
     <button onClick={() => {
              addToCart(item)
            }} className="bg-red-600 w-4 rounded-lg text-white">+</button>
        <p>{item.quantity}</p>
     <button onClick={() => {
              removeFromCart(item)
            }} className="bg-red-600 w-4 rounded-lg text-white">-</button>
       </div>
          </div>
          <span className="text-center font-semibold text-sm">${item.price}</span>
        </div>
        
       ))}
       {
    cartItems.length > 0 ? (
      <div className="flex flex-col justify-between items-center">
    <h1 className="text-lg font-bold">Total Cost: ${getCartTotal()}/- </h1>
    <p className="my-1 flex justify-center items-center text-sm text-neutral-500">(includes all taxes)</p>
    <button
      className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-red-800 focus:outline-none focus:bg-red-800"
      onClick={() => {
        clearCart()
      }}
    >
      Clear cart
    </button>
             <Link className="ml-5 text-orange-600 mt-10" href="/">Continue Shopping <span className="text-3xl">&#8594;</span></Link>
         

  </div>
    ) : (
      <>
      <div className="flex flex-col justify-center">
        <Image height={100} width={90} className="flex ml-16 py-10 opacity-40" src={angry} alt="..swap"/>
         <p className="ml-4 text-neutral-400">No Items to display in your cart</p>
         <Link className="ml-16 text-orange-600 mt-10" href="/">Shop Now<span className="text-3xl">&#8594;</span></Link>
      </div>
      
      </>
    )
  }
</div>
<Footer/>
    </>
  )
}
