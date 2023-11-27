import { createContext, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  export const CartContext = createContext()
 function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
const notify = () =>{
  toast.success("Item added to Cart", {
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
const removeNotify = () =>{
  toast.success("Cart Cleared!", {
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

  const addToCart = (item) => {
    
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      notify()
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

if (isItemInCart && isItemInCart.quantity === 1) {
  setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
} else if (isItemInCart) {
  setCartItems(
    cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  );
}

  };

  const clearCart = () => {
    removeNotify()
    setCartItems([]);
  };

  const getCartTotal = () => {
    return Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
  
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
          <ToastContainer style={{width:"250px", marginTop:"55px"}}/>
    </CartContext.Provider>
  );
};
export default CartProvider;