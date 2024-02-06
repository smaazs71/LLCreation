"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  AddressProps,
  CartProductType,
  GlobalContextType,
  userType,
} from "@/types";

// Initial State
const initialState: GlobalContextType = {
  user: {
    id: "12345",
    name: "name",
    userName: "userName",
    cart: [
      {
        id: "10000000",
        name: "aaliyaaa this is the one",
        sku: "aaliyaaa this is the one",
        color: "color",
        size: "size",
        price: 250.0,
        quantity: 1,
      },
      {
        id: "1000000005",
        name: "Aaliya Long",
        sku: "Aaliya Long M Green",
        size: "M",
        color: "Green",
        price: 100,
        quantity: 1,
      },
      {
        id: "10000001",
        name: "aaliyaaa",
        sku: "aaliyaaa M Black",
        color: "color",
        size: "size",
        price: 0,
        quantity: 9,
      },
      {
        id: "10000002",
        name: "aaliyaaa",
        sku: "aaliyaaa XL Yellow",
        color: "color",
        size: "size",
        price: 0,
        quantity: 5,
      },
      {
        id: "10000003",
        name: "aaliyaaa",
        sku: "aaliyaaa M Green",
        color: "color",
        size: "size",
        price: 0,
        quantity: 3,
      },
      {
        id: "10000004",
        name: "aaliyaaa",
        sku: "aaliyaaa color size",
        color: "color",
        size: "size",
        price: 300.0,
        quantity: 13,
      },
    ],
    addresses: [
      {
        title: "honme",
        line1: "string",
        city: "string",
        pinCode: "string",
        state: "string",
        country: "string",
      },
      {
        title: "office",
        line1: "string",
        city: "string",
        pinCode: "string",
        state: "string",
        country: "string",
      },
    ],
    // cartItemsCount: 0,
    // cartItemsTotalPrice: 0,
  },

  addAddress: ({ title, line1, city, pinCode, state, country }) => {},
  updateAddress: ({ title, line1, city, pinCode, state, country }, index) => {},

  getCartTotalAmount: () => 0,
  addProductInCart: ({ id, name, sku, color, size, price, quantity }) => {},
  updateProductInCart: (sku, key, value) => {},
  updateProductDetailsInCart: (sku, payload) => {},
  deleteProductFromCart: (sku) => {},
  updateProductQuantityFromCart: (sku, count) => {},
};

export const GlobalContext = createContext<GlobalContextType>(initialState);

export const useGlobal = () => {
  return useContext(GlobalContext);
};

type Props = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(AppReducer, initialState.user);

  //Actions

  // Address Functions
  function addAddress(address: AddressProps) {
    dispatch({
      type: "ADD_ADDRESS",
      address,
    });
  }

  function updateAddress(address: AddressProps, index: number) {
    dispatch({
      type: "UPDATE_ADDRESS",
      address,
      index,
    });
  }

  // Cart functions
  function getCartTotalAmount() {
    return user.cart.reduce(
      (partialSum: number, product: CartProductType) =>
        partialSum + product.price * product.quantity,
      0
    );
    // user.cart.forEach((product) => {
    //   price += product.price * product.quantity;
    // });
    // console.log(price);

    // return price;
  }

  function addProductInCart(cartProduct: CartProductType) {
    dispatch({
      type: "ADD_PRODUCT_IN_CART",
      cartProduct,
    });
  }

  function updateProductDetailsInCart(sku: string, payload: object) {
    dispatch({
      type: "UPDATE_PRODUCT_DETAILS_IN_CART",
      sku,
      payload,
    });
  }

  function updateProductInCart(
    sku: string,
    key: string,
    value: string | number
  ) {
    dispatch({
      type: "UPDATE_PRODUCT_IN_CART",
      sku,
      key,
      value,
    });
  }

  function updateProductQuantityFromCart(sku: string, count: number) {
    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY_FROM_CART",
      sku,
      count,
    });
  }

  function deleteProductFromCart(sku: string) {
    dispatch({
      type: "DELETE_ITEM_FROM_CART",
      sku,
    });
  }

  const value = {
    user,

    addAddress,
    updateAddress,

    getCartTotalAmount,
    addProductInCart,
    updateProductDetailsInCart,
    updateProductInCart,
    updateProductQuantityFromCart,
    deleteProductFromCart,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
