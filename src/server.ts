import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/user/user.route";
import bookRouter from "./modules/book/book.router";
import orderRoute from "./modules/order/order.router";
// import { config } from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(bookRouter);
app.use(orderRoute);

app.get("/", (req, res) => {
  res.send({ success: true, message: " I am here" });
});

// For Vercel deployment
const PORT = process.env.PORT || config.port || 5000;

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log(`connected to the database`);
  } catch (err) {
    console.error(`server err`, err);
  }
}

server();

// Export for Vercel
export default app;
