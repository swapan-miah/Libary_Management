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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const book_router_1 = __importDefault(require("./modules/book/book.router"));
const order_router_1 = __importDefault(require("./modules/order/order.router"));
// import { config } from 'dotenv';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(user_route_1.default);
app.use(book_router_1.default);
app.use(order_router_1.default);
app.get("/", (req, res) => {
    res.send({ success: true, message: " I am here" });
});
// For Vercel deployment
const PORT = process.env.PORT || config_1.default.port || 5000;
// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
}
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.database_url);
            console.log(`connected to the database`);
        }
        catch (err) {
            console.error(`server err`, err);
        }
    });
}
server();
// Export for Vercel
exports.default = app;
