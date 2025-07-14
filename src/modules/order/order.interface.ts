import { Types } from "mongoose";

export interface IOrder {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
  title: string;
  isbn: string;
  copies: number;
  totalPrice: number;
  staus: string;
  student: {
    class: string;
    year: string;
    Roll: number;
  };
}

export interface IOrderMethods {
  checkStock(id: string): Promise<boolean>;
}
