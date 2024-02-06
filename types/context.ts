import { AddressProps, CartProductType, userType } from ".";

export interface GlobalContextType {
  user: userType;

  addAddress: (address: AddressProps) => void;
  updateAddress: (address: AddressProps, index: number) => void;

  getCartTotalAmount: () => number;
  addProductInCart: (payload: CartProductType) => void;
  updateProductInCart: (
    sku: string,
    key: string,
    value: string | number
  ) => void;
  updateProductDetailsInCart: (sku: string, payload: object) => void;
  updateProductQuantityFromCart: (sku: string, count: number) => void;
  deleteProductFromCart: (sku: string) => void;
}
