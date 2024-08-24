import { App } from "./data.category";

type Props ={
    category:App
}


export default function CardCategory({category}:Props) {

  return (
    <>
      <div className=" col-span-4 md:col-span-3  lg:col-span-1">
        <div
          className="m-auto  max-w-[118px] h-full  flex flex-col  gap-y-8 justify-start items-center"
        >
          {category.element}
          <p className="font-medium text-base lg:text-lg text-center">
            {category.title}
          </p>
        </div>
      </div>
    </>
  );
}
