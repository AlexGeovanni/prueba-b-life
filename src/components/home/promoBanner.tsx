import iphone from "../../assets/item_phone.jpg";
export default function PromoBanner() {
  return (
    <>
      <div className="relative">
        <h1 className="text-[44px] lg:text-[74px] max-w-[18ch] md:max-w-[15ch]  font-extrabold leading-normal lg:leading-[92px]">
          <span className="block ">Grab</span> Off Smartphone Collection
        </h1>
        <h2
          className="text-[34px] lg:text-[52px]  text-balance text-gray-50 rounded-3xl  px-6 py-1 lg:py-0 lg:px-9 font-extrabold bg-violet-600
            absolute top-2 lg:top-1 left-24 lg:left-40 -z-10 -rotate-2
            "
        >
          50%
        </h2>
      </div>
      <div className="mt-5">
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
      </div>
    </>
  );
}
