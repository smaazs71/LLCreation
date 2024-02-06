"use client";

import { useGlobal } from "@/context/GlobalState";
import { AddressProps } from "@/types";
// import { useGlobal } from "@/context/GlobalState";
// import { CartProductType, ProductProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
  FormEventHandler,
  FormEvent,
} from "react";

interface EditAddressProps {
  isOpen: boolean;
  index?: number;
  closeModal: () => void;
  // address: AddressProps;
}

const EditAddress = ({
  isOpen,
  index,
  closeModal,
}: // address,
EditAddressProps) => {
  const {
    user: { addresses },
    addAddress,
    updateAddress,
  } = useGlobal();

  const initialAddress = {
    title: "",
    line1: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
  };
  const [address, setAddress] = useState<AddressProps>(initialAddress);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name;
    const value = e.target.value;

    setAddress((address) => ({ ...address, [key]: value }));
  };

  const onSubmit = (
    e: MouseEvent<HTMLElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (
      address.title === "" ||
      address.line1 === "" ||
      address.city === "" ||
      address.pinCode === "" ||
      address.state === "" ||
      address.country === ""
    ) {
      console.log(address);

      console.log("error updating the address");

      return;
    }

    if (index && index !== -1) {
      updateAddress(address, index);
      setAddress(initialAddress);
    } else {
      addAddress(address);
      setAddress(initialAddress);
    }
    console.log("addresses");
    console.log(addresses);
  };

  return (
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
              <Dialog.Panel className="relative w-full max-w-[90%] max-h-[90%] overflow-y-auto transform rounded-lg bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 lg:max-w-[50%]">
                <div
                  className="min-w-content relative inline-block max-w-full align-middle transition-all ltr:text-left rtl:text-right opacity-100 scale-100"
                  id="headlessui-dialog-panel-:r12:"
                  data-headlessui-state="open"
                >
                  <button
                    aria-label="Close panel"
                    className="absolute top-4 z-[60] inline-block outline-none focus:outline-0 ltr:right-4 rtl:left-4 lg:hidden"
                  >
                    <span className="sr-only">close</span>
                    <svg
                      className="h-4 w-4"
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
                  <div className="min-h-screen p-5 bg-light sm:p-8 md:min-h-0 md:rounded-xl">
                    <h1 className="mb-4 text-lg font-semibold text-center text-heading sm:mb-6">
                      Add New Address
                    </h1>
                    <form
                      onSubmit={onSubmit}
                      className="grid h-full grid-cols-2 gap-5"
                    >
                      <div>
                        <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                          Type
                        </label>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div>
                            <div className="flex items-center">
                              <input
                                id="billing"
                                name="type"
                                type="radio"
                                className="radio_radio_input__Jo_uR"
                                value="BILLING"
                                onChange={handleChange}
                              />
                              <label className="text-sm text-body">
                                Billing
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <input
                                id="shipping"
                                name="type"
                                type="radio"
                                className="radio_radio_input__Jo_uR"
                                value="SHIPPING"
                              />
                              <label className="text-sm text-body">
                                Shipping
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Title
                        </label>
                        <input
                          id="title"
                          name="title"
                          type="text"
                          value={address.title}
                          className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Country
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={address.country}
                          className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          City
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={address.city}
                          className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          State
                        </label>
                        <input
                          id="state"
                          name="state"
                          type="text"
                          value={address.state}
                          className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Pin Code
                        </label>
                        <input
                          id="pinCode"
                          name="pinCode"
                          type="text"
                          value={address.pinCode}
                          className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Street Address
                        </label>
                        <textarea
                          id="line1"
                          name="line1"
                          value={address.line1}
                          className="flex w-full appearance-none items-center rounded px-4 py-3 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base focus:border-accent"
                          rows={4}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        data-variant="normal"
                        className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12 w-full col-span-2"
                        onClick={onSubmit}
                      >
                        {index && index !== -1
                          ? "Update Address"
                          : "Add Address"}
                      </button>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditAddress;
