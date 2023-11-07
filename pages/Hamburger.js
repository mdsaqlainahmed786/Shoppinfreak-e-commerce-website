import { useState } from "react";
import Image from "next/image"
export default function Header({src, title}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <Image className="rounded-full -mt-14"src={src} height={96} width={96} alt="img"/>
            <p className="mt-5 text-xl flex justify-center uppercase font-bold">Hello, {title}!</p>
              <li className="my-8 uppercase">
                <a href="/about">Men's Clothing</a>
              </li>
              <li className="my-8 uppercase">
                <a href="/about">Women's Clothing</a>
              </li>
              <li className="my-8 uppercase">
                <a href="/portfolio">Electronics</a>
              </li>
              <li className="my-8 uppercase">
                <a href="/portfolio">Jewellery</a>
              </li>
              <li className="my-8 uppercase">
                <a href="/contact">Contact us</a>
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