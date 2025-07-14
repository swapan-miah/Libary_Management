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
exports.getUsers = exports.resgisterUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const resgisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const user = new user_model_1.default(payload);
    const data = yield user.save();
    res.send({
        success: true,
        message: "user created successfully",
        data,
    });
});
exports.resgisterUser = resgisterUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_model_1.default.find();
    res.send({
        success: true,
        message: "user retieved successfully",
        data,
    });
});
exports.getUsers = getUsers;
