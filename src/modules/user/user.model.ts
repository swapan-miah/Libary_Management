import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

// sId,name,email,phone,password,role

const userSchema = new Schema<IUser>({
  sId: { type: Number, required: true, unique: true },
  name: { type: String, required: true, min: 2, max: 250 },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    immutable: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: {
      values: ["Admin", "Customer"],
      message: `{VALUE} is not accetedable`,
    },
    required: true,
  },
});

const User = model<IUser>("user", userSchema);

export default User;
