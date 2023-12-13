"use client";

import { ProductProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
// import { MouseEventHandler } from "react";

interface ProductDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductProps;
}
const ProductDetails = ({
  isOpen,
  closeModal,
  product,
}: ProductDetailsProps) => {
  const [mainImage, setMainImage] = useState(product.images_path[0]);

  const [scrollLeft, setScrollLeft] = useState(0);

  const [selectedColor, setselectedColor] = useState("color");
  const [selectedSize, setselectedSize] = useState("size");
  const [selectedPrice, setselectedPrice] = useState(product.price);

  const imagesDivRef = useRef<HTMLDivElement>(null);

  const handleScrollX = (value: number) => {
    // scrollLeft = imagesDivRef.current.scrollWidth - imagesDivRef.current.clientWidth

    const step = value / 5;
    const speed = 25;
    // imagesDivRef.current.scrollLeft += value
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (imagesDivRef.current) {
        imagesDivRef.current.scrollLeft += step;
        scrollAmount += Math.abs(step);
      }
      if (scrollAmount >= Math.abs(value)) {
        // setScrollLeft(imagesDivRef.current.scrollLeft)
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-[90%] max-h-[90%] overflow-y-auto transform rounded-lg bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-50 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/images/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="relative w-full h-60 bg-pattern bg-cover bg-center rounded-lg">
                        {/* <Image src={`/data_center/images/${mainImage}`} alt="car model" fill priority className="object-contain" /> */}
                        <Image
                          src={mainImage}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>

                      <div className="relative">
                        <div
                          ref={imagesDivRef}
                          onScroll={() =>
                            setScrollLeft(
                              imagesDivRef.current
                                ? imagesDivRef.current.scrollLeft
                                : 0
                            )
                          }
                          className="relative flex flex-no-wrap scrolling-touch mb-4 flex-nowrap gap-3 overflow-x-auto hide-scroll-bar px-8"
                        >
                          {product.images_path.map((image_path) => (
                            <div
                              onClick={(e) => setMainImage(image_path)}
                              className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg"
                            >
                              {/* <Image src={`/data_center/images/${image_path}`} alt="car model" fill priority className="object-contain" /> */}
                              <Image
                                src={image_path}
                                alt="car model"
                                fill
                                priority
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>

                        {imagesDivRef.current && scrollLeft > 0 ? (
                          <div
                            onClick={(e) => handleScrollX(-150)}
                            className="absolute top-0 left-[0px] w-6 h-24 bg-primary-blue-100 z-40"
                          >
                            <Image
                              src="/left-arrow.svg"
                              alt="left arrow"
                              fill
                              priority
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        {imagesDivRef.current &&
                        scrollLeft >=
                          imagesDivRef.current.scrollWidth -
                            imagesDivRef.current.clientWidth ? (
                          ""
                        ) : product.images_path.length > 4 ? (
                          <div
                            onClick={(e) => handleScrollX(150)}
                            className="absolute top-0 right-[0px] w-6 h-24 bg-primary-blue-100 z-40"
                          >
                            <Image
                              src="/right-arrow.svg"
                              alt="right arrow"
                              fill
                              priority
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <>
                      {/* <div className="flex-1 flex flex-col gap-2">
                              <h2 className="font-semibold text-x1 capitalize">
                                 {product.name} {product.category}
                              </h2>
                              <div className="mt-3 flex flex-wrap gap-4">
                                 {Object.entries(product).map(([key,value]) => { 
                                    return(
                                       (key === 'id' || key === 'dimension' || key === 'images_path' || key === 'key_words') ? "" : 
                                    <div className="flex justify-between gap-5 w-full text-right" key={key} >
                                       <h4 className="text-grey capitalize">
                                          {key.split("_").join(" ")}
                                       </h4>
                                       <p className="text-black-100 font-semibold capitalize">
                                          {  
                                             key === 'adjustable' 
                                                ? 
                                             value 
                                                   ? 
                                                'adjustable' 
                                                   : 
                                                "fix size" 
                                                : 
                                             `${value}`
                                          }
                                       </p>

                                    </div>)
                                    }
                                 )}
                              </div>
                           </div> */}
                    </>
                    <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
                      <div className="w-full">
                        <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
                          <h1 className="text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl cursor-pointer transition-colors hover:text-accent">
                            {product.name}
                          </h1>
                          <div>
                            <button
                              type="button"
                              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl text-accent transition-colors border-gray-300 mr-1"
                            >
                              <Image
                                src="/images/heart.svg"
                                alt="heart"
                                width={20}
                                height={20}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex shrink-0 items-center rounded border border-accent bg-accent px-3 py-1 text-sm text-white">
                            {product.rating}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 25.056 24"
                              className="h-2.5 w-2.5 ltr:ml-1 rtl:mr-1"
                            >
                              <g data-name="Group 36413" fill="currentColor">
                                <path
                                  id="Path_22667"
                                  data-name="Path 22667"
                                  d="M19.474,34.679l-6.946-4.346L5.583,34.679a.734.734,0,0,1-1.1-.8L6.469,25.93.263,20.668a.735.735,0,0,1,.421-1.3l8.1-.566,3.064-7.6a.765.765,0,0,1,1.362,0l3.064,7.6,8.1.566a.735.735,0,0,1,.421,1.3L18.588,25.93l1.987,7.949a.734.734,0,0,1-1.1.8Z"
                                  transform="translate(0 -10.792)"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="mt-3 text-sm leading-7 text-base md:mt-4">
                          {product.description}
                        </div>
                        <div className="my-5 flex items-center md:my-10">
                          <span className="flex items-center">
                            <ins className="text-2xl md:text-3xl font-semibold text-accent no-underline">
                              {selectedPrice}
                            </ins>
                          </span>
                        </div>
                        <div>
                          {product.colors && product.colors.length > 1 ? (
                            <div className="flex items-center border-b  border-border-200 border-opacity-70 py-4 first:pt-0 last:border-b-0 last:pb-0">
                              <span className="inline-block min-w-[60px] whitespace-nowrap text-sm font-semibold capitalize leading-none text-heading ltr:mr-5 rtl:ml-5">
                                color :
                              </span>
                              <div className="-mb-5 w-full overflow-hidden">
                                <div
                                  data-overlayscrollbars-initialize=""
                                  className="os-theme-thin-dark w-full pb-5"
                                  data-overlayscrollbars="host"
                                >
                                  <div className="os-size-observer os-size-observer-appear">
                                    <div className="os-size-observer-listener ltr"></div>
                                  </div>
                                  <div
                                    className="os-viewport os-viewport-scrollbar-hidden mr-0 mb-[-20px] ml-0 t-0 l-0 w-[100%] py-0 px-[20px]"
                                    //  style="margin-right: 0px; margin-bottom: -20px; margin-left: 0px; top: 0px; right: auto; left: 0px; width: calc(100% + 0px); padding: 0px 0px 20px;"
                                  >
                                    <div className="mb-2 flex w-full space-x-4 rtl:space-x-reverse">
                                      {product.colors.map((color) => (
                                        <div
                                          onClick={() =>
                                            setselectedColor(color)
                                          }
                                          role="button"
                                          className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5 ${
                                            selectedColor === color
                                              ? "!border-accent"
                                              : ""
                                          }`}
                                        >
                                          <span
                                            className="h-full w-full rounded-full border border-border-200"
                                            style={{
                                              backgroundColor: color, //"rgb(206, 31, 106)",
                                            }}
                                          ></span>
                                        </div>
                                      ))}
                                      {/* <div
                                        role="button"
                                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5 !border-accent"
                                      >
                                        <span
                                          className="h-full w-full rounded-full border border-border-200"
                                          style={{
                                            backgroundColor:
                                              "rgb(206, 31, 106)",
                                          }}
                                        ></span>
                                      </div>
                                      <div
                                        role="button"
                                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5"
                                      >
                                        <span
                                          className="h-full w-full rounded-full border border-border-200"
                                          style={{
                                            backgroundColor: "rgb(52, 79, 161)",
                                          }}
                                        ></span>
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                    <div className="os-scrollbar-track">
                                      <div
                                        className="os-scrollbar-handle w-full"
                                        //   style="width: 100%;"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                    <div className="os-scrollbar-track">
                                      <div
                                        className="os-scrollbar-handle h-full"
                                        //   style="height: 100%;"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          {product.sizes && product.sizes.length > 1 ? (
                            <div className="flex items-center border-b  border-border-200 border-opacity-70 py-4 first:pt-0 last:border-b-0 last:pb-0">
                              <span className="inline-block min-w-[60px] whitespace-nowrap text-sm font-semibold capitalize leading-none text-heading ltr:mr-5 rtl:ml-5">
                                size :
                              </span>
                              <div className="-mb-5 w-full overflow-hidden">
                                <div
                                  data-overlayscrollbars-initialize=""
                                  className="os-theme-thin-dark w-full pb-5"
                                  data-overlayscrollbars="host"
                                >
                                  <div className="os-size-observer os-size-observer-appear">
                                    <div className="os-size-observer-listener ltr"></div>
                                  </div>
                                  <div
                                    className="os-viewport os-viewport-scrollbar-hidden mr-0 mb-[-20px] ml-0 t-0 l-0 w-full py-0 px-[20px]"
                                    //  style="margin-right: 0px; margin-bottom: -20px; margin-left: 0px; top: 0px; right: auto; left: 0px; width: calc(100% + 0px); padding: 0px 0px 20px;"
                                  >
                                    <div className="mb-2 flex w-full space-x-4 rtl:space-x-reverse">
                                      {product.sizes.map((size) => (
                                        <div
                                          onClick={() => setselectedSize(size)}
                                          role="button"
                                          className={`cursor-pointer whitespace-nowrap rounded border-border-200 px-4 py-3 text-sm transition-colors border ${
                                            selectedSize === size
                                              ? "!border-accent !bg-accent !text-white"
                                              : ""
                                          }`}
                                        >
                                          {size}
                                        </div>
                                      ))}
                                      {/* <div
                                        role="button"
                                        className="cursor-pointer whitespace-nowrap rounded border-border-200 px-4 py-3 text-sm transition-colors !border-accent !bg-accent !text-white border"
                                      >
                                        S
                                      </div>
                                      <div
                                        role="button"
                                        className="cursor-pointer whitespace-nowrap rounded border-border-200 bg-gray-50 px-4 py-3 text-sm text-heading transition-colors border"
                                      >
                                        M
                                      </div>
                                      <div
                                        role="button"
                                        className="cursor-pointer whitespace-nowrap rounded border-border-200 bg-gray-50 px-4 py-3 text-sm text-heading transition-colors border"
                                      >
                                        L
                                      </div>
                                      <div
                                        role="button"
                                        className="cursor-pointer whitespace-nowrap rounded border-border-200 bg-gray-50 px-4 py-3 text-sm text-heading transition-colors border"
                                      >
                                        XL
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                    <div className="os-scrollbar-track">
                                      <div
                                        className="os-scrollbar-handle w-full"
                                        //   style="width: 100%;"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                    <div className="os-scrollbar-track">
                                      <div
                                        className="os-scrollbar-handle h-full"
                                        //   style="height: 100%;"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
                          <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                            <div>
                              <button
                                //   disabled=""
                                className="flex w-full items-center justify-center rounded bg-accent py-4 px-5 text-sm font-light text-light transition-colors duration-300 hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 lg:text-base cursor-not-allowed border border-border-400 !bg-gray-300 !text-body hover:!bg-gray-300"
                              >
                                <span>Add To Shopping Cart</span>
                              </button>
                            </div>
                          </div>
                          <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                            500 pieces available
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full flex-row items-start border-t border-border-200 border-opacity-60 pt-4 md:mt-6 md:pt-6">
                        <span className="py-1 text-sm font-semibold capitalize text-heading mr-6 ltr:mr-6 rtl:ml-6">
                          Categories
                        </span>
                        <div className="flex flex-row flex-wrap">
                          <button className="mb-2 whitespace-nowrap rounded border border-border-200 bg-transparent py-1 px-2.5 text-sm lowercase tracking-wider text-heading transition-colors hover:border-accent hover:text-accent focus:bg-opacity-100 focus:outline-0 ltr:mr-2 rtl:ml-2 ml-2">
                            Women Dress
                          </button>
                          <button className="mb-2 whitespace-nowrap rounded border border-border-200 bg-transparent py-1 px-2.5 text-sm lowercase tracking-wider text-heading transition-colors hover:border-accent hover:text-accent focus:bg-opacity-100 focus:outline-0 ltr:mr-2 rtl:ml-2 ml-2">
                            Floral
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductDetails;
