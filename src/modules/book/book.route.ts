import { Router } from "express";
import { bookController } from "./book.controllar";

const bookRouter = Router()

bookRouter.post("/book",bookController.createBook);
bookRouter.get("/book",bookController.getBook);
bookRouter.get("/book/:bookId", bookController.getBookId);
bookRouter.patch("/book/:bookId", bookController.getBookUpdate);
bookRouter.delete("/book/:bookId", bookController.deletedByBookId);

export default bookRouter;