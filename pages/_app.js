import '@/styles/globals.css'
import { SessionProvider} from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './_Context/cart.js'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
})
{
  return (
      <CartProvider>
        <ToastContainer style={{width:"250px", marginTop:"55px"}}/>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </CartProvider>
   
  )
}