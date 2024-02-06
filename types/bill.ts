import { AddressProps, CartProductType } from ".";

export interface BillType {
  id: string;
  name: string;
  emailId: string;
  contactNo: string;
  userName: string;

  cart: CartProductType[];
  deliveryDetails:{
   deliveryAddress: AddressProps;
   contactNo: string;
   name: string;
  };
  billingDetails:{
   billNo?: string;
   billingAddress: AddressProps;
   contactNo: string;
   name: string;
   paymentType?: string;
   paymentId?: string;
   paymentAmount: number;
  };
  cartItemsCount: number;
  cartItemsTotalPrice: number;
}
