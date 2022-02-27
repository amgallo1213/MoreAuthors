const AuthorsController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post("api/author/create", AuthorsController.createAuthor);
    app.get("api/author/:id", AuthorsController.findOneAuthor);
    app.get("api/authors", AuthorsController.findAllAuthors);
    app.put("api/author/:id", AuthorsController.updateOneAuthor);
    //app.delete("/api/author/:id", AuthorsController.deleteOneAuthor)
}