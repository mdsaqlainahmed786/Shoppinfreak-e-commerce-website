import { useRouter } from "next/router";
import { useEffect, useState, useContext} from "react";
import Login from "../login.js"
import { CartContext } from '../_Context/cart'
import DetailCard from "../_Components/DetailCard.js";
import Footer from "../_Components/footer";
import Navbar from "../_Components/_nav.js";
import { useSession} from 'next-auth/react';
function ProductDetail() {
  const { data: session, status } = useSession();
  const {cartItems} = useContext(CartContext)
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null); // Add state for handling errors
  const router = useRouter();
  const { productid } = router.query;
 useEffect(() => {
    const fetcher = async () => {
      if(!productid)  return;
      try {
        
        const data = await fetch(`https://fakestoreapi.com/products/${productid}`);
        if (!data) {
          throw new Error("Failed to fetch product details");
        }

        const response = await data.json();
        setRes(response);
      } catch (error) {
        setError(error.message);
      }
    };

fetcher();
  }, [productid]);   

  if (error) {
    return <div>Error: {error}</div>;
  }
if(!session) return <Login/>
  return (
    <>
     <Navbar session={session} items={cartItems.length}/>
        <div>
          <DetailCard
            title={res?.title}
            image={res?.image}
            description={res?.description}
            price={res?.price}
            product={res}
          />
          {/* Additional details */}

          
        </div>
   {/*  <Footer/>*/}
    </>
  );
}

export default ProductDetail;
