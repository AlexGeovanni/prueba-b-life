import { useState } from "react";

export default function FilterSide() {
  const [isActive, setIsActive] = useState<{ [key: number]: boolean }>({
    1: true
  });
  const handleClick = (id: number) => {
    setIsActive({ [id]:true });
  };
  const DATA_FILTER  =[
    {
      id: 1,
      title: "Computer & Laptop",
      provider: true,
      colorStock:"bg-[#1F2537]",
      text:"text-[#FFFFFF]",
      stock:15
    },
    {
      id: 2,
      title: "Mobile & Phone",
      provider: true,
      colorStock:"bg-[#AFE638]",
      text:"text-[#1F2537]",
      stock:35
    },{
      id: 3,
      title: "Camera Imaging",
      provider: true,
      colorStock:"bg-[#5E1EE5]",
      text:"text-[#FFFFFF]",
      stock:10
    },{
      id: 4,
      title: "TV & Smart Box",
      provider: true,
      colorStock:"bg-[#FFFFFF]",
     text:"text-[#1F2537]",
      stock:8
    },{
      id: 5,
      title: "Home & Appliances",
      provider: true,
      colorStock:"bg-[#FFE921]",
     text:"text-[#1F2537]",
      stock:2
    }
  ];
  return (
    <>
      <ul className="">
        {DATA_FILTER.map(
          (item, index) =>
            item.provider && (
              <li
                key={index}
                className={`font-medium cursor-pointer px-6 py-3 border-s-2 border-gray-300 
                transition all ease-in-out hover:opacity-80 ${isActive[item.id] && "border-violet-600"} duration-300`}
                onClick={() => handleClick(item.id)}
              >
                {item.title}
                <span className={`ms-5 ${item.colorStock} ${item.text} p-1 px-3 rounded-md text-[15px] font-semibold`}>
                  {item.stock}
                </span>
              </li>
            )
        )}
      </ul>
    </>
  );
}
