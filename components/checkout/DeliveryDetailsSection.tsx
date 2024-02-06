"use client";

import Image from "next/image";
import { useGlobal } from "@/context/GlobalState";
import { useEffect, useState } from "react";
import { EditAddress } from "..";
import { BillType } from "@/types";

const DeliveryDetailsSection = () => {
  const {
    user: { addresses },
    getCartTotalAmount,
  } = useGlobal();

  const [addressModal, setAddressModal] = useState(false);

  const [bill, setBill] = useState<BillType>()

  useEffect(() => {
    console.log("addresses:");
    console.log(addresses);

    return () => {};
  }, [addresses]);

  return (
    <div className="w-full space-y-6 lg:max-w-2xl">
      <div className="bg-white p-5 shadow-700 md:p-8">
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base text-white lg:text-xl">
              1
            </span>
            <p className="text-lg capitalize text-heading lg:text-xl">
              Contact Number: {getCartTotalAmount()}
            </p>
          </div>
          <button className="flex items-center text-sm font-semibold text-accent transition-colors duration-200 hover:text-accentHover focus:text-accentHover focus:outline-0">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add
          </button>
        </div>
        <div className="w-full">
          <div className=" react-tel-input ">
            <div className="special-label flex">Phone</div>
            {/* <div className="flex-1 max-sm:w-full flex justify-start items-center relative"> */}
            <Image
              src="/images/india-flag-icon.svg"
              alt="indian flag"
              height={38}
              width={38}
              className="absolute text-center m1-6 px-2 form-control appearance-none text-heading text-sm h-12"
            />
            <input
              className="absolute w-20 text-center m1-10 pl-4 form-control appearance-none text-heading text-sm h-12"
              placeholder="+91"
              disabled={true}
              type="tel"
              value="+91"
            />
            <input
              type="tel"
              placeholder="9876543210"
              maxLength={10}
              name="phone"
              // onChange={(e)=> setModel(e.target.value)}
              className="form-control w-full h-12 pl-16 p-4 bg-white focus:outline-none cursor-pointer text-sm flex items-center appearance-none transition duration-300 ease-in-out text-heading focus:ring-0 !border border-border-base rounded focus:border-accent"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-5 shadow-700 md:p-8">
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base text-white lg:text-xl">
              2
            </span>
            <p className="text-lg capitalize text-heading lg:text-xl">
              Billing Address
            </p>
          </div>
          <button
            onClick={() => setAddressModal(true)}
            className="flex items-center text-sm font-semibold text-accent transition-colors duration-200 hover:text-accentHover focus:text-accentHover focus:outline-0"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <span className="relative flex flex-col gap-4 rounded border border-border-200 bg-gray-100 px-5 py-6 text-center text-base">
            {addresses && addresses.length > 0
              ? addresses.map((address) => (
                  <div className="text-left flex items-center justify-start px-7 gap-11">
                    <input 
                      id="billingAddress"
                      name="billingAddress"
                      type="radio"
                      className=""
                      value={address.title}
                      checked={ bill && address.title === bill.billingDetails.billingAddress.title}
                      // onChange={handleChange}
                    />
                    <label className="text-sm capitalize">
                      <h2 className="font-bold ">{address.title}</h2>
                      <p>Street: {address.line1},</p>
                      <p>City: {address.city},</p>
                      <p>State: {address.state},</p>
                      <p>Pin Code: {address.pinCode},</p>
                      <p>Country: {address.country}</p>
                    </label>
                  </div>
                ))
              : "No Address Found here"}
          </span>
        </div>
      </div>
      <div className="bg-white p-5 shadow-700 md:p-8">
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base text-white lg:text-xl">
              3
            </span>
            <p className="text-lg capitalize text-heading lg:text-xl">
              Shipping Address
            </p>
          </div>
          <button
            onClick={() => setAddressModal(true)}
            className="flex items-center text-sm font-semibold text-accent transition-colors duration-200 hover:text-accentHover focus:text-accentHover focus:outline-0"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <span className="relative rounded border border-border-200 bg-gray-100 px-5 py-6 text-center text-base">
            No Address Found
          </span>
        </div>
      </div>
      <div className="bg-white p-5 shadow-700 md:p-8">
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base text-white lg:text-xl">
              4
            </span>
            <p className="text-lg capitalize text-heading lg:text-xl">
              Delivery Schedule
            </p>
          </div>
        </div>
        <div
          id="headlessui-radiogroup-:r3a:"
          role="radiogroup"
          aria-labelledby="headlessui-label-:r3b:"
        >
          <label className="sr-only" id="headlessui-label-:r3b:" role="none">
            Delivery Schedule
          </label>
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
            role="none"
          >
            <div
              id="headlessui-radiogroup-option-:r3c:"
              role="radio"
              aria-checked="true"
              data-headlessui-state="checked"
            >
              <div className="relative p-4 rounded border cursor-pointer group hover:border-accent border-accent shadow-sm">
                <span className="text-sm text-heading font-semibold block mb-2">
                  Express Delivery
                </span>
                <span className="text-sm text-heading block">
                  90 min express delivery
                </span>
              </div>
            </div>
            <div
              id="headlessui-radiogroup-option-:r3d:"
              role="radio"
              aria-checked="false"
              data-headlessui-state=""
            >
              <div className="relative p-4 rounded border cursor-pointer group hover:border-accent bg-gray-100 border-transparent">
                <span className="text-sm text-heading font-semibold block mb-2">
                  Morning
                </span>
                <span className="text-sm text-heading block">
                  8.00 AM - 11.00 AM
                </span>
              </div>
            </div>
            <div
              id="headlessui-radiogroup-option-:r3e:"
              role="radio"
              aria-checked="false"
              data-headlessui-state=""
            >
              <div className="relative p-4 rounded border cursor-pointer group hover:border-accent bg-gray-100 border-transparent">
                <span className="text-sm text-heading font-semibold block mb-2">
                  Noon
                </span>
                <span className="text-sm text-heading block">
                  11.00 AM - 2.00 PM
                </span>
              </div>
            </div>
            <div
              id="headlessui-radiogroup-option-:r3f:"
              role="radio"
              aria-checked="false"
              data-headlessui-state=""
            >
              <div className="relative p-4 rounded border cursor-pointer group hover:border-accent bg-gray-100 border-transparent">
                <span className="text-sm text-heading font-semibold block mb-2">
                  Afternoon
                </span>
                <span className="text-sm text-heading block">
                  2.00 PM - 5.00 PM
                </span>
              </div>
            </div>
            <div
              id="headlessui-radiogroup-option-:r3g:"
              role="radio"
              aria-checked="false"
              data-headlessui-state=""
            >
              <div className="relative p-4 rounded border cursor-pointer group hover:border-accent bg-gray-100 border-transparent">
                <span className="text-sm text-heading font-semibold block mb-2">
                  Evening
                </span>
                <span className="text-sm text-heading block">
                  5.00 PM - 8.00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 shadow-700 md:p-8">
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base text-white lg:text-xl">
              5
            </span>
            <p className="text-lg capitalize text-heading lg:text-xl">
              Order Note
            </p>
          </div>
        </div>
        <div className="block">
          <div>
            <textarea
              id="orderNote"
              name="orderNote"
              className="flex w-full appearance-none items-center rounded px-4 py-3 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base focus:border-accent"
              // autocomplete="off"
              // autocorrect="off"
              // autocapitalize="off"
              // spellcheck="false"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>
      <EditAddress
        // key={product.id}
        isOpen={addressModal}
        closeModal={() => setAddressModal(false)}
        // address={address}
      />
    </div>
  );
};

export default DeliveryDetailsSection;
