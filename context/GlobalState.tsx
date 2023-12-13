"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { CartProductType, userType } from "@/types";

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
        quantity: 2,
      },
      {
        id: "10000001",
        name: "aaliyaaa",
        sku: "aaliyaaa M Black",
        color: "color",
        size: "size",
        price: 0,
        quantity: 0,
      },
      {
        id: "10000002",
        name: "aaliyaaa",
        sku: "aaliyaaa XL Yellow",
        color: "color",
        size: "size",
        price: 0,
        quantity: 0,
      },
      {
        id: "10000003",
        name: "aaliyaaa",
        sku: "aaliyaaa M Green",
        color: "color",
        size: "size",
        price: 0,
        quantity: 0,
      },
      {
        id: "10000004",
        name: "aaliyaaa",
        sku: "aaliyaaa color size",
        color: "color",
        size: "size",
        price: 300.0,
        quantity: 4,
      },
    ],
    cartItemsCount: 0,
    cartItemsTotalPrice: 0,
  },
  addProductInCart: ({ id, name, sku, color, size, price, quantity }) => {},
  updateProductInCart: (id, key, value) => {},
  updateProductDetailsInCart: (id, payload) => {},
  deleteProductFromCart: (id) => {},
  updateProductQuantityFromCart: (id, count) => {},
};

interface GlobalContextType {
  user: userType;
  addProductInCart: (payload: CartProductType) => void;
  updateProductInCart: (
    id: string,
    key: string,
    value: string | number
  ) => void;
  updateProductDetailsInCart: (id: string, payload: object) => void;
  updateProductQuantityFromCart: (id: string, count: number) => void;
  deleteProductFromCart: (id: string) => void;
}

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
  function addProductInCart(cartProduct: CartProductType) {
    dispatch({
      type: "ADD_PRODUCT_IN_CART",
      cartProduct,
    });
  }

  function updateProductDetailsInCart(id: string, payload: object) {
    dispatch({
      type: "UPDATE_PRODUCT_DETAILS_IN_CART",
      id,
      payload,
    });
  }

  function updateProductInCart(
    id: string,
    key: string,
    value: string | number
  ) {
    dispatch({
      type: "UPDATE_PRODUCT_IN_CART",
      id,
      key,
      value,
    });
  }

  function updateProductQuantityFromCart(id: string, count: number) {
    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY_FROM_CART",
      id,
      count,
    });
  }

  function deleteProductFromCart(id: string) {
    dispatch({
      type: "DELETE_ITEM_FROM_CART",
      id,
    });
  }

  const value = {
    user,
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
