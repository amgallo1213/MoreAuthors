const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post("api/author", AuthorController.createAuthor);
    app.get("api/author/:id", AuthorController.findOneAuthor);
    app.get("api/authors", AuthorController.findAllAuthors);
    app.put("api/author/:id", AuthorController.updateOneAuthor);
    app.delete("/api/author/:id", AuthorController.deleteOneAuthor)
}