const mongoose = require('mongoose');

const dbName = "authorsDB";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`You are connected to the database called ${dbName}`)
    })
    .catch ((err) => {
        console.log("you have a problem connecting to the database", err)
    }) 