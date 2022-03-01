const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post("/api/authors/create", AuthorController.createAuthor);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.put("/api/authors/edit/:id", AuthorController.updateOneAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}