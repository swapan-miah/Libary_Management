"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const book_model_1 = __importDefault(require("../book/book.model"));
const OrderStudentSchema = new mongoose_1.Schema({
    class: { type: String },
    year: { type: String },
    Roll: { type: Number },
});
const orderSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user", required: true },
    bookId: { type: mongoose_1.Schema.Types.ObjectId, ref: "books", required: true },
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    totalPrice: { type: Number },
    copies: { type: Number, required: true },
    staus: { type: String, required: true },
    student: { type: OrderStudentSchema, required: true },
});
orderSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("document form pre", this);
        const book = yield book_model_1.default.findById(this.bookId);
        if (!book)
            throw new Error("book not found");
        this.totalPrice = book.price + this.copies;
    });
});
orderSchema.post("save", function (doc, next) {
    console.log("doc from post", doc);
    const PlainStudent = doc.student.class + " " + doc.student.Roll + doc.student.year;
    console.log(PlainStudent);
    next();
});
const order = (0, mongoose_1.model)("order", orderSchema);
exports.default = order;
