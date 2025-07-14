import Book from "./book.model";
import { Request, Response } from "express";

const createBook = async (req: Request, res: Response) => {
  try {
    const data = await Book.create(req.body);
    res.send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "err sending",
      error,
    });
  }
};

const getBook = async (req: Request, res: Response) => {
  try {
    const data = await Book.find();
    res.send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "err sending",
      error,
    });
  }
};

// const getBookId = async (req: Request, res: Response) => {
//     try {
//         const bookId = req.params.bookId;
//         console.log(bookId)
//         const data = await Book.findById(bookId);
//         res.send({
//             success: true,
//             message: "Book find successfully",
//             data,
//         })
//     } catch (error) {
//         res.send({
//             success: false,
//             message: "err sending",
//             error,
//         })
//     }
// }

const getBookId = async (req: Request, res: Response) => {
  try {
    const bookIds = req.params.bookId;

    const data = await Book.findById(bookIds);

    if (!data) {
      res.status(404).send({
        success: false,
        message: "Book not found",
      });
      return;
    }

    res.status(200).send({
      success: true,
      message: "Book found successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server error",
      error: (error as Error).message,
    });
  }
};

const getBookUpdate = async (req: Request, res: Response) => {
  try {
    const bookIds = req.params.bookId;
    const data = await Book.findByIdAndUpdate(bookIds, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      res.status(404).send({
        success: false,
        message: "Book not found",
      });
      return;
    }

    res.status(200).send({
      success: true,
      message: "Book Updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server error",
      error: (error as Error).message,
    });
  }
};

const deletedByBookId = async (req: Request, res: Response) => {
  try {
    const bookIds = req.params.bookId;
    const data = await Book.findByIdAndDelete(bookIds);
    if (!data) {
      res.status(404).send({
        success: false,
        message: "Book not successful",
      });
      return;
    }

    res.status(200).send({
      success: true,
      message: "Book deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server error",
      error: (error as Error).message,
    });
  }
};

export const bookController = {
  createBook,
  getBook,
  getBookId,
  getBookUpdate,
  deletedByBookId,
};
