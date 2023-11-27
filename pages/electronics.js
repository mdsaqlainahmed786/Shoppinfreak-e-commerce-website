import Navbar from "./Components/_nav.js"
import Login from "./login.js"
import CategoryCard from "./Components/CategoryCard.js"
import Footer from "./Components/footer"
import LoadingBar from 'react-top-loading-bar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios"
import { CartContext } from './Context/cart'
import { useSession} from 'next-auth/react';
import {useState,useEffect, useContext} from "react"
export default function Elctronics() {
  const [progress, setProgress ] = useState(0)
  const [loading,setLoading] = useState(false)
  const {cartItems} = useContext(CartContext)
    const { data: session, status } = useSession();
    const [response,setRes] = useState(null)
    const fetcher = async() =>{
      try{
        setLoading(true)
    const data = await fetch("https://fakestoreapi.com/products/category/electronics")
    const res = await data.json()
    setRes(res)
    setLoading(false)
    }catch(e){
      <div className="flex justify-center text-9xl">There might be some error</div>
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
    <p className="ml-5 pb-1 border-b-4 border-orange-600 rounded-b-sm font-sans text-[25px] inline">Results for Gadgets</p>
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
  {
    response?<Footer/>:null
  }
    </>
    )
}