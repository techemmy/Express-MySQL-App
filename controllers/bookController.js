const db = require('../models');

const BookModel = db.books;

async function getAllBooks(req, res) {
    try {
        const books = await BookModel.findAll();
        res.status(200).json(books)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function addBook(req, res) {
    const bookInfo = req.body;

    try {
        const newBook = await BookModel.create(bookInfo);
        res.status(200).json({
            message: "Book added succesfully",
            data: newBook
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

async function updateBookById(req, res) {
    const bookId = req.params.id;
    const bookUpdateInfo = req.body;

    try {
        const updatedBook = await BookModel.update(bookUpdateInfo, {
            where: {id: bookId}
        });
        res.status(200).json({
            message: "Book updated succesfully",
            updated: updatedBook
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

async function deleteBookById(req, res) {
    const bookId = req.params.id;

    try {
       await BookModel.destroy({
            where: {id: bookId}
        });
        res.status(200).json({
            message: "Book deleted succesfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

module.exports = {
    getAllBooks,
    addBook,
    updateBookById,
    deleteBookById
}