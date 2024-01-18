/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import { Context } from "../pages/_app";

import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

const NavBar = function ({ isOpen, handleHamburger }) {
  const [div, setDiv] = useState(false);
  const router = useRouter();
  const theme = useContext(Context);

  const checkk = () => {
    if (router.pathname === "/gallery" || router.pathname === "/about")
      return `   ${
        isOpen ? "relative" : "lg:fixed relative"
        // isOpen ? "relative" : "lg:fixed relative"
      } z-[999999999999999999]`;
  };

  return (
    <div
      className={`w-full lg:max-w-[100px] max-w-screen fixed bg-[#222] lg:h-screen hs-fit nav-bar z-[9999999999]  `}
    >
      <div className="lg:grid flex z-50 lg:justify-center justify-between content-between items-center py-2 h-full">
        <div className="lg:mx-auto mx-4 z-50 order-1 grid justify-items-center lg:gap-y-6 gap-y-2">
          <Link
            href="/"
            // className="h-14 w-14"
            className="w-14 h-14 lg:w-20 lg:h-20 "
            onClick={() => {
              if (isOpen) {
                handleHamburger();
              }
            }}
          >
            <img
              className="w-full h-full"
              // className="w-16 h-16 lg:w-20 lg:h-20"
              src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639907803/Asaf_up6v4r.png"
              alt=""
            ></img>
          </Link>
          <DarkModeToggle />
        </div>

        <Hamburger isOpen={isOpen} handleHamburger={handleHamburger} />

        <a
          className="navbar-brand railway text-lg sm:text-2xl text-white text-center z-50 lg:order-3 order-2"
          href="/assets/asafmaromcv.pdf"
          download
          target="_blank"
          rel="noopener"
        >
          Asaf Marom
        </a>
      </div>
    </div>
  );
};
export default NavBar;
