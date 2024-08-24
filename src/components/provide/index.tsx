import CardCategory from "./cardCategory";
import Data from "./data.category";

export default function ProvideService() {
  const {DATA_CATEGORY} = Data();
  return (
    <>
      <section className="mb-20 ">
        <div className="px-4 lg:px-[78px]">
          <div className=" mb-20">
            <h2 className="text-center text-5xl lg:text-7xl font-extrabold">
              What <span className="text-violet-600">we</span> provide?
            </h2>
          </div>
          <div className="grid grid-cols-12 lg:grid-cols-7 gap-2 gap-y-10">

            {/** Recoremos los datos de categorías y devolvemos un componente card para mostrar cada categoria.  */}
            {DATA_CATEGORY.map((item, i) => (
              <CardCategory key={i} category={item} />
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
