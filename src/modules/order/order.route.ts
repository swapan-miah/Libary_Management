import { Router } from "express";
import { orderController } from "./oder.controller";

const orderRoute = Router();

orderRoute.post("/order",orderController.CreatedOrder);
orderRoute.get("/order",orderController.CreatedOrder);

export default orderRoute;