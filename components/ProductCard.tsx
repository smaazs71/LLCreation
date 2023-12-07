"use client"

import { ProductProps } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'

interface ProductCardProps {
   product: ProductProps;
}

const ProductCard = ({product}: ProductCardProps) => {

   const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      <article className="flex flex-col justify-center bg-white h-full w-full transform overflow-hidden rounded border border-border-200 border-opacity-70 bg-light transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow">
         <div className="relative flex m-auto h-48 w-64 cursor-pointer items-center justify-center sm:h-64">
            <span className="sr-only">Product Image</span>
            <Image 
               src={product.images_path[0]}
               alt='dress'
               decoding="async" data-nimg="fill" 
               className="product-image object-contain absolute h-full w-full p-4" 
               // sizes="(max-width: 768px) 100vw" 
               width={0}
               height={0}
            />
         </div>
         <header className="p-3 md:p-6">
            <h3 className="cursor-pointer truncate text-xs text-textBase md:text-sm">
               {product.name}
            </h3>
            <div className="mt-2 flex items-center justify-between">
               <div>
                  <span className="text-sm font-semibold text-textHeading md:text-base">
                     ₹ {product.prices}
                  </span>
               </div>
               <button className="flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-light text-sm text-accent transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-0 md:h-9 md:w-9">
                  <span className="sr-only">plus</span>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 stroke-2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
               </button>
            </div>
         </header>
      </article>
    </div>
  )
}

export default ProductCard




// "use client"

// import { CarProps, ProductProps } from "@/types"
// import Image from "next/image";
// import { CustomButton, ProductDetails } from ".";
// import { useState } from "react";

// interface ProductCardProps {
//    product: ProductProps
// }

// const ProductCard = ({product}: ProductCardProps) => {
   
//    // const { city_mpg, year, make, model, transmission, drive } = product;
//    const {
//       id,
//    model,
//    price,
//    category,
//    type,
//    color,
//    variant,
//    dimension,
//    specialization,
//    description,
//    adjustable,
//    images_path,
//    } = product

//    const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
//       <div className="text-[22px] leading-[26px] font-bold capitalize">
//          {model} {type}
//       </div>
//       <p className="flex mt-6 text-[32px] font-extrabold">
//          <span className="self-start text-[14px] font-semibold" >
//             ₹
//          </span>
//          {price}
//          <span className="self-end text-[14px] font-medium">
//             /count
//          </span>
//       </p>

//       <div className="relative w-full h-40 my-3 object-contain">
//          <Image src={images_path[0]} alt="product model" fill priority className="object-contain" />
//          {/* <Image src={`/data_center/images/${images_path[0]}`} alt="product model" fill priority className="object-contain" /> */}

//       </div>
//          <div className="relative flex w-full mt-2">
//             <div className="flex group-hover:invisibility w-full justify-between text-gray">
//                <div className="flex flex-col justify-center items-center gap-2">
//                   <Image src="/category.svg" width={20} height={20} alt="gas" />
//                   <p className="text-[14px] capitalize">
//                      {category}
//                   </p>
//                </div>
//                <div className="flex flex-col justify-center items-center gap-2">
//                   <Image src="/color.svg" width={20} height={20} alt="tire" />
//                   <p className="text-[14px] capitalize">
//                      {color}
//                   </p>
//                </div>
//                <div className="flex flex-col justify-center items-center gap-2">
//                   <Image src="/adjustable.svg" width={20} height={20} alt="steering wheel" />
//                   <p className="text-[14px] capitalize">
//                      {adjustable ? "Adjustable" : "Fix size"}
//                   </p>
//                </div>
//             </div>

//             <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
//                <CustomButton
//                   title="View More"
//                   containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
//                   textStyles="text-white text-[14px] leading-[17px] font-bold"
//                   rightIcon="/right-arrow.svg"
//                   handleClick={() => {setIsOpen(true)}}
//                   />
//             </div>
//          </div>

//          <ProductDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} product={product} />
      
//     </div>
//   )
// }

// export default ProductCard