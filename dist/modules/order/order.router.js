"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const oder_controller_1 = require("./oder.controller");
const orderRoute = (0, express_1.Router)();
orderRoute.post("/order", oder_controller_1.orderController.CreatedOrder);
orderRoute.get("/order", oder_controller_1.orderController.CreatedOrder);
exports.default = orderRoute;
