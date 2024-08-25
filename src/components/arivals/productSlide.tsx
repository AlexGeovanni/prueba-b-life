import StarIcon from "../icons/star";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BtnAdd from "./btn";
import FavoriteIcon from "../icons/favorite";

interface Props {
  refSlide: React.RefObject<Slider>;
}

export default function ProductSlide({ refSlide }: Props) {
  // datos de prueba para los productos
  const data = [
    {
      id: 1,
      title: "Xiphone 14 Pro Maxe",
      image: "https://via.placeholder.com/200",
      price: 175,
      stars: 121,
    },
    {
      id: 2,
      title: "Xiphone 13",
      image: "https://via.placeholder.com/200",
      price: 100,
      stars: 89,
    },
    {
      id: 3,
      title: "Samsonge Galaxy A53",
      image: "https://via.placeholder.com/200",
      price: 110,
      stars: 90,
    },
    {
      id: 4,
      title: "Xiphone Galaxy",
      image: "https://via.placeholder.com/200",
      price: 140,
      stars: 69,
    },
    {
      id: 5,
      title: "Samson plus Galaxy",
      image: "https://via.placeholder.com/200",
      price: 200,
      stars: 98,
    },
  ];

  // configuraciones para los slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container overflow-hidden  ">
      <Slider ref={refSlide} {...settings} >
        {data.map((product, i) => (
          <div key={i} className=" max-w-[402px] pt-4 lg:pt-0 cursor-pointer  relative"  >
            <div className="md:p-6 p-[42px] lg:p-[42px] ">
              <div className="bg-slate-600 m-auto h-[267px] IMAGEN CONTENEDOR "></div>
              <span className="bg-black border border-white inline-block p-2 rounded-full 
              absolute top-0 right-6 md:-top-2 md:right-1 lg:-top-2 lg:right-6 z-50 ">
                  <FavoriteIcon />
              </span>
            
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-base lg:text-lg font-bold">
                {product.title}
              </span>
              <span className="text-base lg:text-lg font-bold">
                ${product.price}.00
              </span>
            </div>
            <p className="text-base lg:text-lg font-normal mt-3"  >
              Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
              vitae leo nunc.
            </p>
            <div className="flex items-center mt-3">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
              <span className="ms-2 text-base"> ({product.stars})</span>
            </div>
            <BtnAdd />
          </div>
        ))}
      </Slider>
    </div>
  );
}
