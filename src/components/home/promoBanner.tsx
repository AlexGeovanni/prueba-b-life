import iphone from "../../assets/item_phone.jpg";

import {motion} from "framer-motion"

export default function PromoBanner() {
  return (
    <>
      <div className="relative">
        <h1 className="text-[44px] md:text-[50px] lg:text-[74px] max-w-[18ch] md:max-w-[15ch]  font-extrabold leading-normal lg:leading-[92px]"
        >
          <span className="block ">Grab</span> Off Smartphone Collection
        </h1>
        <motion.h2
          className="text-[34px] lg:text-[52px]  text-balance text-gray-50 rounded-3xl  px-6 py-1 lg:py-0 lg:px-9 font-extrabold bg-[#5E1EE5]
            absolute top-2 lg:top-1 left-24 md:left-[108px] lg:left-40 -z-10 
            "
          initial={{
            opacity: 0,
          scale:0
          }} 
          animate={{
            opacity: 1,
             scale: 1,
            rotate:[0,-2],
            transition: {
              duration: 1,
              ease: "easeInOut",
            }
          }}
        >
          50%
        </motion.h2>
      </div>
      <motion.div className="mt-5"
      initial={{
        opacity: 0,
        translateY:25,
      }}
      animate={{
        opacity: 1,
        translateY:0,
        transition: {
          duration: .8,
          ease: "easeInOut",
        }
      }}
      >
        <p className="text-balance text-base lg:text-lg ">
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
        <div className="flex gap-7 mt-7 items-center  ">
          <div>
            <img
              src={iphone}
              alt="iPhone 14"
              className=" object-cover aspect-square h-full w-full"
            />
          </div>
          <h2 className="max-w-56 font-semibold text-[24px] lg:text-[32px] leading-9 ">
            Xiphone 14 Edition
          </h2>
        </div>
      </motion.div>
    </>
  );
}
