import Slider from "react-slick";
import ArrowLeftIcon from "../icons/arrow-left";
import ArrowRightIcon from "../icons/arrow-right";
import { MutableRefObject } from "react";

type Props = {
    refSlide: MutableRefObject<Slider> 
}

export default function ControllerSlide({refSlide}:Props) {
  return (
    <div className="flex gap-4 lg:gap-6">
      <span
        onClick={() => refSlide.current.slickPrev()}
        className=" cursor-pointer border-2 border-black rounded-full p-2 lg:p-0 lg:w-[55px] lg:h-[55px] flex justify-center items-center
            hover:bg-gray-200 hover:scale-110 transition-all ease-out duration-300
            "
      >
        <ArrowLeftIcon />
      </span>
      <span
        onClick={() => refSlide.current.slickNext()}
        className=" cursor-pointer border-2 border-transparent bg-[#AFE638] rounded-full p-2 lg:p-0 lg:w-[55px] lg:h-[55px] flex justify-center items-center
             hover:bg-[#aadf36] hover:scale-110 transition-all ease-out duration-300
             "
      >
        <ArrowRightIcon />
      </span>
    </div>
  );
}
