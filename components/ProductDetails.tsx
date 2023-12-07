"use client"

import { CarProps, ProductProps } from '@/types';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { MouseEventHandler } from "react";


interface ProductDetailsProps {
   isOpen: boolean;
   closeModal: () => void;
   product: ProductProps;
}
const ProductDetails = ({isOpen, closeModal, product}: ProductDetailsProps) => {

   const [mainImage, setMainImage] = useState(product.images_path[0])

   const [scrollLeft, setScrollLeft] = useState(0)

   const imagesDivRef = useRef<HTMLDivElement>(null)
   
   const handleScrollX = ( value: number ) => {
      // scrollLeft = imagesDivRef.current.scrollWidth - imagesDivRef.current.clientWidth
      
      const step = value/5
      const speed = 25
      // imagesDivRef.current.scrollLeft += value 
      let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if(imagesDivRef.current){
      imagesDivRef.current.scrollLeft += step;
      scrollAmount += Math.abs(step);
      }
      if (scrollAmount >= Math.abs(value)) {
         // setScrollLeft(imagesDivRef.current.scrollLeft)
        clearInterval(slideTimer);
      }
    }, speed);
   }

  return (
    <>
    <Transition appear show={isOpen} as={Fragment} >
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
         <Transition.Child
         as={Fragment}
         enter="ease-out duration-300"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="ease-in duration-200"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
         >
            <div className="fixed inset-0 bg-black bg-opacity-25">

            </div>

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
                     <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5" >
                        <button
                        type="button"
                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                        onClick={closeModal}
                        >
                           <Image
                              src="/close.svg"
                              alt="close"
                              width={20}
                              height={20}
                              className="object-contain"
                              />
                        </button>
                        <div className="flex-1 flex flex-col gap-3">

                           <div className="relative w-full h-60 bg-pattern bg-cover bg-center rounded-lg">

                              {/* <Image src={`/data_center/images/${mainImage}`} alt="car model" fill priority className="object-contain" /> */}
                              <Image src={mainImage} alt="car model" fill priority className="object-contain" />

                           </div>


                           <div className='relative'>
                              
                              <div ref={imagesDivRef} onScroll={() => setScrollLeft(imagesDivRef.current?imagesDivRef.current.scrollLeft:0)} className="relative flex flex-no-wrap scrolling-touch mb-4 flex-nowrap gap-3 overflow-x-auto hide-scroll-bar px-8">

                                 {/* <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div>
                                 <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div>
                                 <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div>
                                 <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div>
                                 <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div>
                                 <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div>
                                 <div className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />

                                 </div> */}

                                 {product.images_path.map((image_path) => (
                                    <div onClick={e => setMainImage(image_path)} className="flex-none relative w-24 h-24 bg-primary-blue-100 rounded-lg">
                                       {/* <Image src={`/data_center/images/${image_path}`} alt="car model" fill priority className="object-contain" /> */}
                                       <Image src={image_path} alt="car model" fill priority className="object-contain" />
                                    </div>
                                 ))}
                              </div>

                              {imagesDivRef.current && scrollLeft > 0 ? (
                              <div onClick={e => handleScrollX(-150)} className="absolute top-0 left-[0px] w-6 h-24 bg-primary-blue-100 z-50">
                                 <Image src="/left-arrow.svg" alt="left arrow" fill priority className="object-contain" />
                              </div>                 ):""}
                              {imagesDivRef.current && scrollLeft >= imagesDivRef.current.scrollWidth - imagesDivRef.current.clientWidth ? "": product.images_path.length > 4 ? (
                              <div onClick={e => handleScrollX(150)} className="absolute top-0 right-[0px] w-6 h-24 bg-primary-blue-100 z-50">
                                 <Image src="/right-arrow.svg" alt="right arrow" fill priority className="object-contain" />
                              </div>                 ) : ""}
   

                           </div>
                        </div>

                        

                        <div className="flex-1 flex flex-col gap-2">
                           <h2 className="font-semibold text-x1 capitalize">
                              {product.model} {product.type}
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
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>

            </div>
         </div>


      </Dialog>
      </Transition>
       </>
  )
}

export default ProductDetails