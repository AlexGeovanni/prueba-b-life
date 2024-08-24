import DealImage from "./DealImage";
import PromoBanner from "./promoBanner";

export default function Home() {
  return (
    <section className="my-16 mt-2  ">
      <div className="grid grid-cols-11 lg:grid-cols-9 ps-6  lg:ps-44 ">
        <div className="col-span-full md:col-span-6 lg:col-span-4 my-auto">
          <PromoBanner />
        </div>
        <div className=" col-span-full md:col-span-5 relative ">
          <DealImage />
        </div>
      </div>
    </section>
  );
}
