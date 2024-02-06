import { CartProductType } from "@/types";
import Image from "next/image";
import { useGlobal } from "@/context/GlobalState";

interface SideBarCartItemProps {
  product: CartProductType;
//   updateProductQuantityFromCart: (sku: string, count: number) => void;
//   deleteProductFromCart: (sku: string) => void;
}

const SideBarCartItem = ({ product }: SideBarCartItemProps) => {
  const { deleteProductFromCart, updateProductQuantityFromCart } = useGlobal();

  return (
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
                : updateProductQuantityFromCart(product.sku, -1);
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
        <Image src="/images/dress.png" alt="dress" width={40} height={40} />
      </div>
      <div className="grow">
        <h3 className="font-bold text-heading">
          {`${product.name} - ${product.color}/${product.size}`}
        </h3>
        <p className="my-2.5 font-semibold text-accent">${product.price}</p>
        <span className="text-xs text-body">{product.quantity} X 1 pc(s)</span>
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
  );
};

export default SideBarCartItem;
