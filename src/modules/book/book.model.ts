import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
    {
        title: { type: String, trim: true, unique: true, required: true },
        author: { type: String, required: true },
        genre: { type: String, required: true, enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"] },
        isbn: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        copies: { type: Number, required: true, min: 0 },
        available: { type: Boolean, required: true }
    },

    { timestamps: true }

);

const Book = model<IBook>("book", bookSchema);

export default Book;