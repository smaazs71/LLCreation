import { MouseEventHandler } from "react";

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface ProductProps {
  id: string;
  name: string;
  price: string;
  category: string;
  sub_category?: string;
  colors: string[];
  sizes: string[];
  pricing: {
    sku: string;
    size: string;
    color: string;
    price: number;
    stock: number;
  }[];
  description: string;
  images_path: string[];
  key_words: string;
  rating: number;
}


export interface userType {
   id: string;
   name: string;
   userName: string;
   cart: CartProductType[];
   cartItemsCount: number;
   cartItemsTotalPrice: number;
}

export interface CartProductType {
  id: string,
  name: string,
  sku: string,
  color: string,
  size: string,
  price: number,
  quantity: number
}


export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}






