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

 
export interface CustomButtonProps {
   title: string;
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";
   textStyles?: string;
   rightIcon?: string;
   isDisabled?: boolean;
 }
 