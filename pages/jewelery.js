import Navbar from "./Components/_nav.js"
import Login from "./login.js"
import CategoryCard from "./Components/CategoryCard.js"
import Image from "next/image"
import error from "public/error.png"
import LoadingBar from 'react-top-loading-bar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from "./Components/footer"
import { CartContext } from './Context/cart'
import axios from "axios"
import {useContext,useRef, useState, useEffect} from "react"
import { useSession} from 'next-auth/react';
export default function Jewelery() {
  const [progress, setProgress ] = useState(0)
  const [loading, setLoading ] = useState(false)
  const [err, setErr ] = useState(false)
    const { data: session, status } = useSession();
    const {cartItems} = useContext(CartContext)
    const [response,setRes] = useState(null)
    const fetcher = async() =>{
      try{
        setLoading(true)
    const data = await fetch("https://fakestoreapi.com/products/category/jewelery")
    const res = await data.json()
    setRes(res)
    setLoading(false)
    }catch(e){
        setErr(true)
      setLoading(false)
    }
    }
    useEffect(()=>{
      fetcher()
      setProgress(100)
    },[])
    
  // if (status === 'loading') {
//     return <p>Loading...</p>; // Display a loading state while session is being checked
//   }
  if(!session) return <Login/>
  return(
    <>
         <LoadingBar
       color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     <Navbar session={session} items={cartItems.length}/>
    <div className="absolute -mt-16">
    <p className="ml-5 pb-1 border-b-4 border-orange-600 rounded-b-sm font-sans text-[25px] inline">Results for Jewelery</p>
    </div>
  
  {
    response?.length===0?<div>Laoding</div>:response?.map((product)=>(
      <div key={product.id}>
      <CategoryCard
      title={product.title}
      image={product.image}
      description={product.description.slice(0, 80)}
      price={product.price}
      product={product}/>
      </div>
      ))
  }
     { loading && 
 <div className="flex mt-36 flex-col justify-center items-center -mb-10">
 {
 [1,2,3,4,5,6].map((i)=>(
  
<Skeleton key={i} height={400} width={250} />
   ))
 }
  </div>
  
 
   }
         {err?      
      (<>
      <div className="flex flex-col justify-center items-center">
        <Image height={100} width={90} className="flex mt-44 py-10 opacity-60" src={error} alt="..swap"/>
         <p className="flex justify-center items-center text-neutral-400">There was a Technical Error!</p> <p className="flex justify-center text-neutral-400">Please try to Reload page or comeback later!!</p>
      </div>
      
      </>):null}
          <Footer/>
    </>
    )
}