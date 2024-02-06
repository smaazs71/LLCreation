import { AddressProps, CartProductType, userType } from "@/types";

export interface appReducerActionType {
  type: string;
  id?: string;
  sku?: string;
  cartProduct?: CartProductType;
  payload?: object;
  count?: number;
  key?: string;
  value?: string | number;
  address?: AddressProps;
  index?: number;
}

export default (state: userType, action: appReducerActionType) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: action.address
          ? [...state.addresses, action.address]
          : [...state.addresses],
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.map((address, i) =>
        action.address && i === action.index ? action.address : address
        ),
      };

    case "ADD_PRODUCT_IN_CART":
      return {
        ...state,
        cart: action.cartProduct
          ? [...state.cart, action.cartProduct]
          : [...state.cart],
      };

    case "UPDATE_PRODUCT_QUANTITY_FROM_CART":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.sku === action.sku
            ? {
                ...product,
                quantity: action.count
                  ? (product.quantity += action.count)
                  : product.quantity,
              }
            : product
        ),
      };
    case "UPDATE_PRODUCT_IN_CART":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.sku === action.sku
            ? { ...product, [action.key || 0]: action.value }
            : product
        ),
      };

    case "UPDATE_PRODUCT_DETAILS_IN_CART":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.sku === action.sku
            ? { ...product, ...action.payload }
            : product
        ),
      };

    case "DELETE_ITEM_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.sku != action.sku),
      };

    default:
      return state;
  }
};
