import Navbar from "./_Components/_nav.js"
import SearchComp from "./_Components/_search.js"
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useSession} from 'next-auth/react';
import Login from "./login.js"
import {useState,useEffect, useContext} from "react"
import axios from "axios"
import Card from "./_Components/Card.js"
import { CartContext } from './_Context/cart'
export default function Home({term}) {
  const {cartItems} = useContext(CartContext)
  const { data : session }= useSession();
  
  const [progress, setProgress ] = useState(0)
  const [response,setRes] = useState(null)
  //if (status === 'loading') {
  //  return <p>Loading...</p>; // Display a loading state while session is being checked
  //}
  // const fetcher = async() =>{
//     const data = await fetch("https://fakestoreapi.com/products")
//     const res = await data.json()
//     setRes(res)
//   }

  

  if(!session) return <Login/>
  return (
    <>
   <Navbar session={session} items={cartItems.length}/>
 <ToastContainer style={{width:"250px", marginTop:"55px"}}/>
   <SearchComp/>
 {/*  <div id="main" className="grid grid-cols-2 mt-6 mx-5 gap-5 flex justify-center"> 
  {
    response?.length===0 ?<div>Loading</div>:response?.map((product)=>(
      <div key={product.id}>
      <Card 
      title={product.title}
      image={product.image}
      description={product.description}
      price={product.price}/>
      </div>
      ))
  }
    </div>*/}
         <LoadingBar
       color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  </>
  )
  }