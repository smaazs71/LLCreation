"use client";

import { useGlobal } from "@/context/GlobalState";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { CartSideBarHeader, SideBarCartItem } from ".";
interface CartSideBarProps {
  cartSideBar: boolean;
  setCartSideBar: Dispatch<SetStateAction<boolean>>;
}

const CartSideBar = ({ cartSideBar, setCartSideBar }: CartSideBarProps) => {
  const {
    user: { cart },
    getCartTotalAmount,
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
                <CartSideBarHeader
                  cartItemsCount={cart.length}
                  closeCartSideBar={() => setCartSideBar(false)}
                />

                <div
                  className="z-10 grow pt-16 pb-20 os-viewport os-viewport-scrollbar-hidden"
                  style={{
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
                  {cart.map((product) => (
                    <SideBarCartItem product={product} />
                  ))}
                </div>

                <footer className="fixed bottom-0 z-20 w-full max-w-md bg-white px-6 py-5">
                  <button className="flex h-12 w-full justify-between rounded-full bg-accent p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 md:h-14">
                    <span className="flex h-full flex-1 items-center px-5 text-white">
                      Checkout
                    </span>
                    <span className="flex h-full shrink-0 items-center rounded-full bg-white px-5 text-accent">
                      ${getCartTotalAmount().toString()}.00
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
