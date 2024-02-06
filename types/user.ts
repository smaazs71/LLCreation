export interface userType {
  id: string;
  name: string;
  userName: string;
  cart: CartProductType[];
  addresses: AddressProps[];
  //  cartItemsCount: number;
  //  cartItemsTotalPrice: number;
}

export interface CartProductType {
  id: string;
  name: string;
  sku: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

export interface AddressProps {
  title: string;
  line1: string;
  city: string;
  pinCode: string;
  state: string;
  country: string;
}
