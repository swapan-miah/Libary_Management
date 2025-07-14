import User from "./user.model"
import { Request, Response } from 'express';

const resgisterUser = async (req: Request, res: Response) => {

    const payload = req.body

    const user = new User(payload);

    const data = await user.save();

    res.send({
        success: true,
        message: "user created successfully",
        data,
    })

}
const getUsers = async (req: Request, res: Response) => {

    const data = await User.find() 

    res.send({
        success: true,
        message: "user retieved successfully",
        data,
    })

}

export { resgisterUser,getUsers }