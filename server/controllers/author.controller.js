const Author = require("../models/author.model");


module.exports = {
    findAllAuthors: (req, res) => {
        Author.find({})
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors)  
            })
            .catch((err) => {
                console.log("Find All Authors failed.");
                res.json({message: "Something went wrong in Find All Authors", error: err})
            })
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                console.log(newAuthor);
                res.json(newAuthor)
            })
            .catch((err) => {
                console.log("Something went wrong in Create New Author");
                res.status(400).json(err)
            })
    },
    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor);  
                res.json(oneAuthor)
            })
            .catch((err) => {
                console.log("Find One Author has failed");
                res.json({message: "Something went wrong in Find One Author", error: err})
            })
    },
    updateOneAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedAuthor => {
                console.log(updatedAuthor);
                res.json(updatedAuthor)
            })
            .catch((err) => {
                console.log("Something went wrong in Update Author");
                res.status(400).json(err)
            })
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor) => {
                console.log(deletedAuthor);
                res.json(deletedAuthor)
            })
            .catch((err) => {
                console.log("Delete One Author has failed");
                res.json({message: "Something went wrong in Delete Author", error: err})
            })
    },
};