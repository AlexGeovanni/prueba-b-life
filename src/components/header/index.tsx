import {motion} from "framer-motion"

import { useState } from "react";
import EllipseOne from "../icons/ellipse1";
import SphereOne from "../icons/sphere1";
import ControllUserBtn from "./controllUser";
import NavBar from "./navbar";
import BtnBuger from "./btnBuger";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState<boolean | null>(false);

  const handleToggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  return (
    <header className="">
      <motion.nav 
      className="drop-shadow-xl lg:drop-shadow-none bg-gray-50 "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
           duration: 1,
            ease: "easeInOut",
          },
      }}
      >
        <div className="px-4 lg:px-28 py-4 flex flex-wrap items-center justify-between ">
          <a href="#" className="relative " aria-label="Logo page" >
            <span className="absolute -top-3 -right-3">
              <EllipseOne />
            </span>
            <SphereOne />
          </a>
         <BtnBuger handleToggleNavbar={handleToggleNavbar} />
          <div
            className={`${
              navbarOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto items-center   `}
            id="navbar-solid-bg"
          >
            <NavBar />

            <ControllUserBtn classC={"flex lg:hidden mt-4 "} />
          </div>
          <ControllUserBtn classC={"hidden lg:flex"} />
        </div>
      </motion.nav>
    </header>
  );
}
