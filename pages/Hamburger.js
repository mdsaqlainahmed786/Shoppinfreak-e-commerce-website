import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"
import Link from "next/link"
export default function Header({src, title}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
const router = useRouter()
  return (
    <div className="flex items-center justify-between py-1 ml-2">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-5 bg-gray-600"></span>
            <span className="block h-0.5 w-5 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
            <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <Image className="rounded-full -mt-14"src={src} height={96} width={96} alt="img"/>
            <p className="mt-5 text-2xl flex justify-center bold uppercase">Hello, {title}!</p>
              <li className={router.pathname=="/jewelery" ? "text-red-600 my-8 uppercase pb-1 border-b-4 border-red-600 rounded-b-sm":"my-8 uppercase"}>
                <Link href="/jewelery">Jewelery</Link>
              </li>
              <li className={router.pathname=="/electronics" ? "text-red-600 my-8 uppercase pb-1 border-b-4 border-red-600 rounded-b-sm":"my-8 uppercase"}>
                <Link  href="/electronics">Electronics</Link>
              </li>
              <li className={router.pathname=="/men'sClothing" ? "text-red-600 my-8 uppercase pb-1 border-b-4 border-red-600 rounded-b-sm":"my-8 uppercase"}>
                <Link href="/men'sClothing">Men's Clothing</Link>
              </li>
              <li className={router.pathname=="/women'sclothing" ? "text-red-600 my-8 uppercase pb-1 border-b-4 border-red-600 rounded-b-sm":"my-8 uppercase"}>
                <Link href="/women'sclothing">Women's Clothing</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgb(241 245 249);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}