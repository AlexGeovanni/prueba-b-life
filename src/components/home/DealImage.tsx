import mask from "../../assets/Mask.webp";
import groupQH from "../../assets/GroupQH.webp";


export default function DealImage() {
  return (
    <>
      <div>
      <img
        src={mask}
        alt="iPhone 14"
        className="sm:object-contain md:object-cover lg:object-contain aspect-[1/1] h-full w-full  "
      />
      </div>
      <div className="absolute bottom-[75px] lg:bottom-44 md:size-32 lg:size-auto">
      <img src={groupQH} className="object-contain aspect-square h-full w-full" alt="" />
      </div>
    </>
  );
}
