
import EllipseTwo from "../icons/ellipse2";
import SphereTwo from "../icons/sphere2";

export default function Footer() {
  const FOOTER_INFO = [
    {
      title: "Company",
      links: ["About Us", "Products Digital", "Customer Reviews"],
    },
    {
      title: "Information",
      links: ["Help Center", "Payment Methods", "Returns & Refund"],
    },
    {
      title: "Contact",
      links: ["(+1)123-456-7890", "email@youremail.com"],
    },
  ];

  return (
    <footer className="p-4 py-6 lg:px-28">
      <div className="lg:grid grid-cols-5 gap-4">
        <div className="col-span-2 pt-6 flex flex-col gap-4 justify-between items-baseline mb-8 lg:m-0 ">
          <span className="relative inline-block border ">
            <span className="absolute -top-5 -right-5">
              <EllipseTwo />
            </span>
            <SphereTwo />
          </span>
          <p className="text-balance ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. orum aliquid sint sequi in ad provident vitae.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 col-span-3">
          {FOOTER_INFO.map((item, index) => (
            <div key={index} >
              <h3 className="font-bold text-[20px] lg:text-[22px] mb-3 tracking-wide">{item.title}</h3>
              <ul className="flex flex-col gap-[13px]">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="font-normal text-sm lg:text-lg">
                    <a href="#" className="transition all ease-in-out duration-300 hover:opacity-85"  rel="noopener noreferrer">
                    {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
