import { Router } from "express";
import userRoute from "../user/user.route";
import bookRouter from "../book/book.router";

const routers = Router()

routers.use("/user",userRoute)
routers.use("/book",bookRouter)

export default routers