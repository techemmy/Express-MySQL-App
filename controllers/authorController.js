const db = require('../models');

const AuthorModel = db.authors;

async function getAuthors(req, res) {
    try {
        const authors = await AuthorModel.findAll();
        res.status(200).json({
            message: "Authors retrieved successfully",
            data: authors
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function addAuthor(req, res) {
    const authorInfo = req.body;
    
    try {
        const nweAuthor = await AuthorModel.create(authorInfo);
        res.status(200).json({
            message: "Author retrieved successfully",
            data: nweAuthor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function updateAuthorById(req, res) {
    const authorToUpdateId = req.params.id;
    const authorInfoUpdate = req.body;
    try {
        const author = await AuthorModel.update(authorInfoUpdate, {
            where: {id: authorToUpdateId}
        });
        res.status(200).json({
            message: "Authors updated successfully",
            data: author
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function deleteAuthorById(req, res) {
    const authorToDelete = req.params.id;
    try {
        await AuthorModel.destroy({where: {
            id: authorToDelete
        }});
        res.status(200).json({
            message: "Authors deleted successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    getAuthors,
    addAuthor,
    updateAuthorById,
    deleteAuthorById
}