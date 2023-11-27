import '@/styles/globals.css'
import { SessionProvider} from "next-auth/react"
import  CartProvider  from './Context/cart.js'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
})
{
  return (
      <CartProvider>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </CartProvider>
   
  )
}