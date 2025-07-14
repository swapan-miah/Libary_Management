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
exports.bookController = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield book_model_1.default.create(req.body);
        res.send({
            success: true,
            message: "Book created successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "err sending",
            error,
        });
    }
});
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield book_model_1.default.find();
        res.send({
            success: true,
            message: "Book created successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "err sending",
            error,
        });
    }
});
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
const getBookId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookIds = req.params.bookId;
        const data = yield book_model_1.default.findById(bookIds);
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
});
const getBookUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookIds = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndUpdate(bookIds, req.body, {
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
});
const deletedByBookId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookIds = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndDelete(bookIds);
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
});
exports.bookController = {
    createBook,
    getBook,
    getBookId,
    getBookUpdate,
    deletedByBookId,
};
