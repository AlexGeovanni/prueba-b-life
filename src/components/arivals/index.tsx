import { MutableRefObject, useRef } from "react";


import ProductSlide from "./productSlide";
import Slider from "react-slick";
import ControllerSlide from "./controllerSlide";
import FilterSide from "./filterSide";

export default function NewArrivalsSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const refSlide = useRef() as MutableRefObject<Slider>;

  return (
    <section className="mb-16">
      <div className="ps-4 lg:ps-28">
        <div className="p-4 lg:pe-28 flex  justify-between items-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            New <span className="text-[#5E1EE5]">arrival</span> for you
          </h2>
          <ControllerSlide refSlide={refSlide} />
        </div>

        <div className="grid grid-cols-10  mt-8">
          <div className="col-span-full lg:col-span-2   ">
            <FilterSide />
          </div>
          <div className="col-span-full  lg:col-span-8  lg:ms-14">
            <ProductSlide refSlide={refSlide} />
          </div>
        </div>
      </div>
    </section>
  );
}
