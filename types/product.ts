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
 