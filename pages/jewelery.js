import Navbar from "./_Components/_nav.js"
import Login from "./login.js"
import CategoryCard from "./_Components/CategoryCard.js"
import LoadingBar from 'react-top-loading-bar'
import axios from "axios"
import { useSession} from 'next-auth/react';
import {useState,useEffect} from "react"
export default function Jewelery() {
  const [progress, setProgress ] = useState(0)
    const { data: session, status } = useSession();
    const [response,setRes] = useState(null)
    const fetcher = async() =>{
      try{
    const data = await fetch("https://fakestoreapi.com/products/category/jewelery")
    const res = await data.json()
    setRes(res)
    }catch(e){
      <div className="flex justify-center text-9xl">There might be some error</div>
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
    <Navbar session={session}/>
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
      price={product.price}/>
      </div>
      ))
  }
 
    </>
    )
}