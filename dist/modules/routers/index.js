"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("../user/user.route"));
const book_router_1 = __importDefault(require("../book/book.router"));
const routers = (0, express_1.Router)();
routers.use("/user", user_route_1.default);
routers.use("/book", book_router_1.default);
exports.default = routers;
