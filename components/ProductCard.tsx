"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import React, { MouseEvent, useEffect, useState } from "react";
import { ProductDetails } from ".";
import { useGlobal } from "@/context/GlobalState";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantityInCart, setQuantityInCart] = useState<number>(0);

  const {
    user: { cart, cartItemsCount, cartItemsTotalPrice },
    addProductInCart,
    updateProductInCart,
    updateProductDetailsInCart,
    deleteProductFromCart,
    updateProductQuantityFromCart,
  } = useGlobal();

  const addProductToCart = async (
    e: MouseEvent<HTMLButtonElement>,
    product: ProductProps
  ) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("adding products to cart length of p");

    await addProductInCart({
      id: product.id,
      name: product.name,
      sku: product.pricing[0].sku,
      color: product.pricing[0].color,
      size: product.pricing[0].size,
      price: product.pricing[0].price,
      quantity: 1,
    });
    
    checkPresenceInCart();
  };

  const checkPresenceInCart = () => {
    cart.forEach((productInCart) => {
      if (productInCart.sku === product.pricing[0].sku)
        setQuantityInCart(productInCart.quantity);
    });
  };

  useEffect(() => {
    return () => {
      if (product.pricing.length === 1) {
        checkPresenceInCart();
      }
    };
  }, [cart.length]);

  return (
    <article
      onClick={() => setIsOpen(true)}
      className="flex flex-col justify-center h-full w-full transform overflow-hidden rounded border border-border-200 border-opacity-70 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow"
    >
      <div className="relative flex m-auto h-48 w-64 cursor-pointer items-center justify-center sm:h-64">
        <span className="sr-only">Product Image</span>
        <Image
          src={product.images_path[0]}
          alt="dress"
          decoding="async"
          data-nimg="fill"
          className="product-image object-contain absolute h-full w-full p-4"
          // sizes="(max-width: 768px) 100vw"
          width={0}
          height={0}
        />
      </div>
      <header className="p-3 md:p-6">
        <h3 className="cursor-pointer truncate text-xs text-base md:text-sm">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-heading md:text-base">
              ₹ {product.price}
            </span>
          </div>

          {quantityInCart !== 0 ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex overflow-hidden w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row text-white rounded absolute sm:static bottom-3 ltr:right-3 rtl:left-3 sm:bottom-0 ltr:sm:right-0 rtl:sm:left-0"
            >
              <button
                onClick={() => updateProductQuantityFromCart(product.id, -1)}
                className="cursor-pointer p-2 transition-colors duration-200 text-white hover:bg-accentHover focus:outline-0"
              >
                <span className="sr-only">minus</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-3 w-3 stroke-2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 12H4"
                  ></path>
                </svg>
              </button>
              <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
                {quantityInCart}
              </div>
              <button
                onClick={() => updateProductQuantityFromCart(product.id, 1)}
                className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0"
                title=""
              >
                <span className="sr-only">plus</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={(e) =>
                product.pricing.length === 1 ? addProductToCart(e, product) : ""
              }
              className="flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-white text-sm text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white focus:border-accent focus:bg-accent focus:text-white focus:outline-0 md:h-9 md:w-9"
            >
              <span className="sr-only">plus</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </header>
      <ProductDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        product={product}
      />
    </article>
  );
};

export default ProductCard;

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
//          <ProductDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} product={product} />

//       <p className="flex mt-6 text-[32px] font-extrabold">
//          <span className="self-start text-[14px] font-semibold" >
//             ₹
//          </span>
//          {price}
//          <span className="self-end text-[14px] font-medium">
//             /count//          <ProductDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} product={product} />

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
