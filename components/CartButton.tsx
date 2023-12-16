import { useGlobal } from "@/context/GlobalState";
import React, { Dispatch, SetStateAction } from "react";

interface CartButtonProps {
  setCartSideBar: Dispatch<SetStateAction<boolean>>;
}

const CartButton = ({ setCartSideBar }: CartButtonProps) => {

  const {
    user: { cart },
    getTotalAmount,
  } = useGlobal();

  return (
    <button
      onClick={() => setCartSideBar(true)}
      className="product-cart fixed top-1/2 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-accent p-3 pt-3.5 text-sm font-semibold text-white shadow-900 transition-colors duration-200 hover:bg-accentHover focus:outline-0 right-0 rounded-tr-none rounded-br-none rtl:left-0 rtl:rounded-tl-none rtl:rounded-bl-none lg:flex"
    >
      <span className="flex pb-0.5">
        <svg
          width="14"
          height="16"
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
        <span className="flex ml-2 rtl:mr-2">{cart.length} Items</span>
      </span>
      <span className="mt-3 w-full rounded bg-white px-2 py-2 text-accent">
        ${getTotalAmount().toString()}.00
      </span>
    </button>
  );
};

export default CartButton;
