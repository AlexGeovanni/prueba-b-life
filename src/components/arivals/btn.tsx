import CartIcon from "../icons/cart";

export default function BtnAdd() {
  return (
    <button className="relative inline-flex items-center justify-start py-4 px-9 mt-3 overflow-hidden font-bold rounded-full group">
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 
      absolute left-0 top-0 bg-yellow-black opacity-[3%]"></span>
      <span className="absolute -top-4 -left-1 w-52 h-52 -mt-1
       transition-all duration-500 ease-in-out rotate-45 
       -translate-x-56 -translate-y-24 bg-black opacity-90 group-hover:-translate-x-1"></span>
      <span 
      className="relative flex items-center gap-3 w-full font-medium text-base
      transition-colors duration-200 ease-in-out group-hover:text-white">
      <CartIcon  /> Add to cart
      </span>
      <span className="absolute inset-0 border-2 border-black rounded-full"></span>
    </button>
  );
}
