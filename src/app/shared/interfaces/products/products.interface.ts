import { ICategoryResponse } from "../category/category.interface";

export interface IProductRequest {
   name:string;
   path:string;
   description:string;
   weight:string;
   price:number;
   imagePath:string;
   category:ICategoryResponse;
}
export interface IProductResponse extends IProductRequest {
   id:number;
}