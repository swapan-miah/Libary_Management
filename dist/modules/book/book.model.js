"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, trim: true, unique: true, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true, enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"] },
    isbn: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, required: true }
}, { timestamps: true });
const Book = (0, mongoose_1.model)("book", bookSchema);
exports.default = Book;
