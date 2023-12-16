import { product_data } from "@/data_center/productData";
import { FilterSideBar, ProductCard, ShowMore } from ".";

const Catalogue = ({ searchParams }: any) => {
  const filteredProducts = product_data;

  // const filteredProducts = filterProducts(data, {
  //  model: searchParams.model || "",
  //  category: searchParams.category || "",
  //  type: searchParams.type || "",
  //  color: searchParams.color || "",
  //  variant: searchParams.variant || "",
  //  specialization: searchParams.specialization || "",
  //  adjustable: searchParams.adjustable || '',
  // })

  const isDataEmpty =
    !Array.isArray(filteredProducts) ||
    filteredProducts.length < 1 ||
    !filteredProducts;

  return (
    <div className="bg-catalogueBG flex">
      <FilterSideBar />

      <div className="p-4 w-full ">
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-3">
              {/* {allCars?.map((car) => (
        <CarCard car={car} />
      ))} */}

              {filteredProducts?.map((product, i) => {
                return ((searchParams && searchParams.limit) || 10) > i ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  ""
                );
              })}
            </div>
            <ShowMore
              pageNumber={((searchParams && searchParams.limit) || 10) / 10}
              isNext={
                ((searchParams && searchParams.limit) || 10) <
                filteredProducts.length
              }
              // isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-x1 font-bold">Oops, no results</h2>
            {/* <p>{filteredProducts?.message}</p>
    <p>{allCars?.message}</p> */}
          </div>
        )}
        {/* <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 dark:border-gray-700">
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
     
   </div> */}
      </div>
    </div>
  );
};

export default Catalogue;
