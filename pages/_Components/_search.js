import Image from "next/image"
import Card from "../_Components/Card.js"
import {useRef, useState, useEffect} from "react"
import ecommerce from "public/ecommerce.webp"
export default function SearchComp(){
  const [res, setRes] = useState(null)
const [term, setTerm]=useState("");
 
useEffect(() => {
  const fetchData = async () => {
    if (!term) {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const response = await data.json();
      setRes(response);
    
    }
  };

  fetchData();
}, [term]);
 
  const search = async() =>{
    if(!term) return
    const stats = await fetch(`https://fakestoreapi.com/products/category/${term}`)
    const response = await stats.json()
    console.log(response)
    setRes(response)
    }
  return(
    <>
 
       <div className="mt-11 h-96 py-2">
   <Image className="h-48 absolute brightness-50" src={ecommerce} width={1000}/>
   <div className="relative max-w-sm mx-auto flex justify-center top-10">
    <input onChange={e=> setTerm(e.target.value.toLowerCase()) } className="-ml-10 w-64 py-2 px-4 border-transparent focus:border-transparent rounded-md shadow-sm focus:outline-0 focus:ring-0 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search Categories"/>
    <button onClick={search} className="absolute inset-y-0
    left-[290px] flex items-center px-4 text-white bg-orange-600 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
    </svg>
  </button>
  </div>
  <p className="relative flex justify-center top-[60px] text-white font-light text-[20px]">Search 1000+ Products World wide</p>
  <p className="relative flex justify-center top-[60px] text-white font-light text-[20px]">And Get Upto 75% Off</p>
</div>
<div className="w-fit">
<p className="flex ml-4 -mt-[160px] border-b-4 border-orange-600 rounded-b-md border-x-0 font-sans text-[25px] inline">Explore Latest Trends!</p></div>
        <div id="main" className="grid grid-cols-2 mt-6 mx-5 gap-5 flex justify-center"> 
  {
    res?.length===0 ?<div>Loading</div>:res?.map((product)=>(
      <div key={product.id}>
      <Card 
      title={product.title}
      image={product.image}
      description={product.description}
      price={product.price}/>
      </div>
      ))
  }
    </div>
    </>
    )
}