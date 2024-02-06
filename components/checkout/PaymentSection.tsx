import Image from "next/image";

const PaymentSection = () => {
  return (
    <>
      <div className="p-5 mt-10 border border-gray-200 bg-white">
        <div
          id="headlessui-radiogroup-:r3p:"
          role="radiogroup"
          aria-labelledby="headlessui-label-:r3q:"
        >
          <label
            className="mb-5 block text-base font-semibold text-heading"
            id="headlessui-label-:r3q:"
            role="none"
          >
            Choose Payment Method
          </label>
          <div
            className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3"
            role="none"
          >
            <div
              id="headlessui-radiogroup-option-:r3r:"
              role="radio"
              aria-checked="true"
              data-headlessui-state="checked"
            >
              <div className="relative flex h-full w-full cursor-pointer items-center justify-center rounded border p-3 text-center !border-accent bg-white shadow-600">
                <Image
                  src="/images/stripe-logo.svg"
                  alt="paypal logo"
                  height={60}
                  width={60}
                />
              </div>
            </div>
            <div
              id="headlessui-radiogroup-option-:r3s:"
              role="radio"
              aria-checked="false"
              data-headlessui-state=""
            >
              <div className="relative flex h-full w-full cursor-pointer items-center justify-center rounded border border-gray-200 bg-white p-3 text-center">
                <Image
                  src="/images/paypal-logo.svg"
                  alt="paypal logo"
                  height={60}
                  width={60}
                />
              </div>
            </div>
            <div
              id="headlessui-radiogroup-option-:r3t:"
              role="radio"
              aria-checked="false"
              data-headlessui-state=""
            >
              <div className="relative flex h-full w-full cursor-pointer items-center justify-center rounded border border-gray-200 bg-white p-3 text-center">
                <span className="text-xs font-semibold text-heading">
                  Cash On Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="block text-sm text-body">
            Please click Place order to make order and payment
          </span>
        </div>
      </div>
      <button
        data-variant="normal"
        className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 border border-border-base bg-gray-300 hover:bg-gray-300 border-border-400 text-body cursor-not-allowed px-5 py-0 h-12 mt-5 w-full"
      >
        Place Order
      </button>
      <div className="mt-3">
        <p className="my-2 text-sm ltr:text-left rtl:text-right text-red-500">
          Please select and fill all the fields and place your order
        </p>
      </div>
    </>
  );
};

export default PaymentSection;
