import ArrowDownIcon from "../icons/arrow-down";

type Props = {
    classC: string; // Class name for the parent div container
}

export default function ControllUserBtn({classC}:Props) {
  return (
    <>
<div className={`${classC} gap-2.5 items-center`}>
        <button
          type="button"
          className="font-semibold text-gray-500 p-4 text-[13px]   uppercase
            transition-all ease-out hover:underline hover:text-gray-800 duration-300
            "
        >
          Login
        </button>
        <button
          type="button"
          className="rounded-full relative overflow-hidden flex gap-2.5 group items-center justify-center py-4 px-[37px] m-1 cursor-pointer   bg-black text-white"
        >
          Sing Up Now
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-40 opacity-10"></span>
          <ArrowDownIcon />
        </button>
      </div>
    </>
  );
}
