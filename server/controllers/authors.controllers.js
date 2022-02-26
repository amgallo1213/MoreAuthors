const Authors = require('../models/authors.model');

module.exports.createAuthor = (req, res) => {
    Authors.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor)
        })
        .catch((err) => {
            console.log("Something went wrong in Create Author");
            res.statuse(40).json(err);
        })
}