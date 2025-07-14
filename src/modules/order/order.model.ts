import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Book from "../book/book.model";

const OrderStudentSchema = new Schema({
  class: { type: String },
  year: { type: String },
  Roll: { type: Number },
});

const orderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  bookId: { type: Schema.Types.ObjectId, ref: "books", required: true },
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  totalPrice: { type: Number },
  copies: { type: Number, required: true },
  staus: { type: String, required: true },
  student: { type: OrderStudentSchema, required: true },
});

orderSchema.pre("save", async function () {
  console.log("document form pre", this);

  const book = await Book.findById(this.bookId);
  if (!book) throw new Error("book not found");

  this.totalPrice = book.price + this.copies;
});

orderSchema.post("save", function (doc, next) {
  console.log("doc from post", doc);
  const PlainStudent =
    doc.student.class + " " + doc.student.Roll + doc.student.year;
  console.log(PlainStudent);
  next();
});

const order = model<IOrder>("order", orderSchema);
export default order;
