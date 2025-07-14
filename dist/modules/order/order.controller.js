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
exports.orderController = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const book_model_1 = __importDefault(require("../book/book.model"));
const mongoose_1 = require("mongoose");
const CreatedOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const Order = await order.create(req.body);
    const orders = new order_model_1.default(req.body);
    // Check book availability directly
    const book = yield book_model_1.default.findById(req.body.book);
    const orderStock = book ? book.available && book.copies > 0 : false;
    if (!orderStock)
        throw new mongoose_1.Error("check in the stock");
    yield orders.save();
    res.send({
        success: true,
        message: "Book Order successfully",
        data: orders,
    });
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Order = yield order_model_1.default.find().populate("user").populate("book");
    res.send({
        success: true,
        message: "Book Order successfully",
        data: Order,
    });
});
exports.orderController = {
    CreatedOrder,
    getOrder,
};
