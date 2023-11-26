import Navbar from "./_Components/_nav.js"
import Login from "./login.js"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CategoryCard from "./_Components/CategoryCard.js"
import Footer from "./_Components/footer"
import LoadingBar from 'react-top-loading-bar'
import { CartContext } from './_Context/cart'
import axios from "axios"
import { useSession} from 'next-auth/react';
import {useState,useEffect, useContext} from "react"
export default function MenCloth() {
    const { data: session, status } = useSession();
    
    const {cartItems} = useContext(CartContext)
    const [progress, setProgress ] = useState(0)
    const [loading, setLoading ] = useState(false)
    const [response,setRes] = useState(null)
    const fetcher = async() =>{
      try{
        setLoading(true)
    const data = await fetch("https://fakestoreapi.com/products/category/women's clothing")
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
   //  return <p>Loading...</p>; // Display a loading state while session is being checked
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
    <p className="ml-5 pb-1 border-b-4 border-orange-600 rounded-b-sm font-sans text-[25px] inline">Results to Women's Trend</p>
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