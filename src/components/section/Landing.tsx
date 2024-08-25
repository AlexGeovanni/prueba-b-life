import {  useRef } from "react";
import NewArrivalsSection from "../arivals";
import Footer from "../footer";
import Home from "../home";
import ProvideService from "../provide";

import { motion, useInView, } from "framer-motion";

export default function LandingPage() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });
  const isInView2 = useInView(ref2,{
    amount: "some",
  } )

  const variants = {
    hidden: {
      opacity: 0,
      y:50,
      transition: { duration: 1 },
    },
    visible: {
      opacity: 1,
      y:0,
      transition: { duration: 1},
    
    },
  };
  return (
    <>
      <Home />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView && "visible"}
        variants={variants}
      >
        <ProvideService />
      </motion.div>
      <motion.div
      ref={ref2}
      initial="hidden"
      animate={isInView2 && "visible"}
      variants={variants}
      >
      <NewArrivalsSection />
      </motion.div>
      <Footer />
    </>
  );
}
