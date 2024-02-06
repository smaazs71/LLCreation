"use client";
import { CartDetailsSection, DeliveryDetailsSection, PaymentSection } from "@/components";

const CheckOutPage = () => {

  return (
    <div className="bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <div className="m-auto  mt-[5rem] flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
        <DeliveryDetailsSection />
        <div className="mt-10 mb-10 w-full sm:mb-12 lg:mb-0 lg:w-96">
          <div>
            <CartDetailsSection />

            <PaymentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
