import { Request, Response } from "express";
import order from "./order.model";
import Book from "../book/book.model";
import { Error } from "mongoose";

const CreatedOrder = async (req: Request, res: Response) => {
  // const Order = await order.create(req.body);
  const orders = new order(req.body);

  // Check book availability directly
  const book = await Book.findById(req.body.book);
  const orderStock = book ? book.available && book.copies > 0 : false;
  if (!orderStock) throw new Error("check in the stock");

  await orders.save();

  res.send({
    success: true,
    message: "Book Order successfully",
    data: orders,
  });
};

const getOrder = async (req: Request, res: Response) => {
  const Order = await order.find().populate("user").populate("book");
  res.send({
    success: true,
    message: "Book Order successfully",
    data: Order,
  });
};

export const orderController = {
  CreatedOrder,
  getOrder,
};
