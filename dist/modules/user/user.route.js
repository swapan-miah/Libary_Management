"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const userRoute = (0, express_1.Router)();
userRoute.post("/user", user_controller_1.resgisterUser);
userRoute.get("/user", user_controller_1.getUsers);
exports.default = userRoute;
