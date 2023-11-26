import Image from "next/image"
import Link from "next/link"
import payment from "public/Paying.png"
import trust from "public/trust.png"
import topBrand from "public/Top.png"
import replace from "public/Return.png"
import {useContext} from "react"
import { CartContext } from '../_Context/cart'
export default function DetailCard({title, product, image, price, description}) {
  const { cartItems, addToCart } = useContext(CartContext)
  return (
    <>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
    <div className="w-full flex justify-center items-center mt-16">
    <img className="w-64 h-72" src={image} alt={title}/>
    </div>
    <div className="mt-3 ml-3">
        <p className="text-sm text-neutral-600 flex justify-center items-center mb-3">1k+ bought this past month</p>
    <p className="text-3xl bold">{title}</p>
    </div>
    <div className="mt-3 ml-3 space-y-2">
    <div className="w-fit inline bg-red-600 p-1 text-white text-sm rounded-md">Deal of the Day</div>
    <p className="mt-2 text-2xl font-light">Price: ${price} <span className="text-2xl ml-2  font-thin text-red-700">-75% OFF</span></p>
            <div className="mt-2 flex items-center text-[20px] text-yellow-300">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span className="ml-3 text-sm text-neutral-500">(100+ Reviews)</span>
        </div>
    </div>
    <div className="mt-5 ml-3">
    <p className="text-2xl bold">Availability: <span className="text-green-600 text-2xl font-bold">In Stock</span></p>
    </div>
    <div className="w-full ml-3 mt-3">
    <p className="text-2xl bold border-b-4 border-orange-600 rounded-b-md mr-40">More About Product:</p>
    <p className="text-sm mt-2 text-neutral-500">{description}</p>
    </div>
<div className="mt-5 ml-3">
<button onClick={()=>addToCart(product)} className="w-full bg-red-600 text-white flex justify-center items-center rounded-full py-2">Add to Cart</button>
</div>
<div className="mt-5 ml-3">
<Link href="/Cart"><button className="w-full bg-orange-600 text-white flex justify-center items-center rounded-full py-2">View Cart</button></Link>
</div>
<div className="mt-4 ml-3">
<p className="text-2xl bold border-b-4 border-orange-600 rounded-b-md mr-48">We Provide you!</p>
<div className="flex justify-evenly space-x-3 mt-5 ml-5">
<div className="w-16">
<Image className="w-11 h-11" src={payment} alt="advantages.png"/>
<p className="flex flex-col justify-center items-center -ml-2 overflow-visible">Cash on delivery</p>
</div>
<div className="w-16">
<Image className="w-11 h-11" src={trust} alt="advantages.png"/>
<p className="flex flex-col justify-center items-center ml-1 overflow-visible">Free delivery</p>
</div>
<div className="w-16">
<Image className="w-11 h-11" src={replace} alt="advantages.png"/>
<p className="flex flex-col justify-center items-center  overflow-visible">7 Day Replace</p>
</div>
<div className="w-16">
<Image className="w-11 h-11" src={topBrand} alt="advantages.png"/>
<p className="flex flex-col justify-center items-center  overflow-visible">Popular Brands</p>
</div>
</div>
<div className="flex justify-center items-center">
<Link className="text-orange-600 mt-5" href="/">Continue Shopping<span className="text-3xl">&#8594;</span></Link>
</div>
</div>
   </> 
    )
}