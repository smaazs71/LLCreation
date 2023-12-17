"use client";

import { useGlobal } from "@/context/GlobalState";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Dispatch, Fragment, SetStateAction } from "react";

interface CartSideBarProps {
  cartSideBar: boolean;
  setCartSideBar: Dispatch<SetStateAction<boolean>>;
}

const CartSideBar = ({ cartSideBar, setCartSideBar }: CartSideBarProps) => {
  const {
    user: { cart },
    getTotalAmount,
    deleteProductFromCart,
    updateProductQuantityFromCart,
  } = useGlobal();
  return (
    <Transition appear show={cartSideBar} as={Fragment}>
      <aside className="fixed inset-0 z-50 h-full overflow-hidden right-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <Transition.Child
            as={Fragment}
            enter="ease-in duration-500"
            enterFrom="-me-[28rem]"
            enterTo="-me-0"
            leave="ease-out duration-500"
            leaveFrom="-me-0"
            leaveTo="-me-[28rem]"
          >
            <Dialog
              as="div"
              className="absolute flex inset-y-0 bg-white outline-none right-0 z-50 max-w-md h-full w-full text-base shadow-xl"
              onClose={() => {
                setCartSideBar(false);
              }}
            >
              <section className="fixed flex h-full flex-col bg-white">
                <header className="fixed top-0 z-50 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-white px-6 py-4">
                  <div className="flex font-semibold text-accent">
                    <svg
                      width="24"
                      height="22"
                      className="shrink-0"
                      viewBox="0 0 12.686 16"
                    >
                      <g transform="translate(-27.023 -2)">
                        <g transform="translate(27.023 5.156)">
                          <g>
                            <path
                              d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                              transform="translate(-53.023 -101.005)"
                              fill="currentColor"
                            ></path>
                          </g>
                        </g>
                        <g transform="translate(30.274 2)">
                          <g>
                            <path
                              d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                              transform="translate(-157.039)"
                              fill="currentColor"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="flex ltr:ml-2 rtl:mr-2">
                      {cart.length} Items
                    </span>
                  </div>
                  <button
                    onClick={() => setCartSideBar(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-muted transition-all duration-200 hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"
                  >
                    <span className="sr-only">close</span>
                    <svg
                      className="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </header>

                <div
                  className="z-10 grow pt-16 pb-20 os-viewport os-viewport-scrollbar-hidden"
                  style={{
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
                  {cart.map((product) => (
                    <div
                      className="flex items-center border-b border-solid border-border-200 border-opacity-75 px-4 py-4 text-sm sm:px-6"
                      style={{ opacity: 1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
                          <button
                            onClick={() => {
                              product.quantity === 1
                                ? deleteProductFromCart(product.sku)
                                : updateProductQuantityFromCart(
                                    product.sku,
                                    -1
                                  );
                            }}
                            className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100"
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
                          <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold text-heading">
                            {product.quantity}
                          </div>
                          <button
                            onClick={() => {
                              updateProductQuantityFromCart(product.sku, 1);
                            }}
                            className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100"
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
                      </div>
                      <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
                        <Image
                          src="/images/dress.png"
                          alt="dress"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="grow">
                        <h3 className="font-bold text-heading">
                          {`${product.name} - ${product.color}/${product.size}`}
                        </h3>
                        <p className="my-2.5 font-semibold text-accent">
                          ${product.price}
                        </p>
                        <span className="text-xs text-body">
                          {product.quantity} X 1 pc(s)
                        </span>
                      </div>
                      <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
                        ${product.price * product.quantity}
                      </span>
                      <button
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"
                        onClick={() => deleteProductFromCart(product.sku)}
                      >
                        <span className="sr-only">close</span>
                        <svg
                          className="h-3 w-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ))}

                  <div
                    className="flex items-center border-b border-solid border-border-200 border-opacity-75 px-4 py-4 text-sm sm:px-6"
                    data-projection-id="4"
                    style={{ opacity: 1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
                        <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
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
                        <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold !px-0 text-heading">
                          9
                        </div>
                        <button
                          className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100"
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
                    </div>
                    <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
                      <Image
                        src="/images/dress.png"
                        alt="dress"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-heading">
                        Levi'S Western Denim Shirt - Blue/S{" "}
                      </h3>
                      <p className="my-2.5 font-semibold text-accent">$25.00</p>
                      <span className="text-xs text-body">9 X 1 Stk</span>
                    </div>
                    <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
                      $225.00
                    </span>
                    <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2">
                      <span className="sr-only">close</span>
                      <svg
                        className="h-3 w-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <footer className="fixed bottom-0 z-20 w-full max-w-md bg-white px-6 py-5">
                  <button className="flex h-12 w-full justify-between rounded-full bg-accent p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 md:h-14">
                    <span className="flex h-full flex-1 items-center px-5 text-white">
                      Checkout
                    </span>
                    <span className="flex h-full shrink-0 items-center rounded-full bg-white px-5 text-accent">
                      ${getTotalAmount().toString()}.00
                    </span>
                  </button>
                </footer>
              </section>
            </Dialog>
          </Transition.Child>
        </div>
      </aside>
    </Transition>
  );
};

export default CartSideBar;
