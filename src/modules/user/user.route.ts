import { Router } from "express";
import { getUsers, resgisterUser } from "./user.controller";

const userRoute = Router()

userRoute.post("/user", resgisterUser);
userRoute.get("/user",getUsers)

export default userRoute