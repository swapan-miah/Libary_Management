"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// sId,name,email,phone,password,role
const userSchema = new mongoose_1.Schema({
    sId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, min: 2, max: 250 },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
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
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
