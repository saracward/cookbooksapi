//Import connection
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

//Create Author as new schema
const authorSchema = new Schema({
  firstName: String,
  lastName: String,
  cookbooks: [{ ref: "Cookbooks", type: Schema.Types.ObjectId }],
});

const Author = mongoose.model("Author", authorSchema);

//export model named "Author"

module.exports = Author;
