const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema ({
    body: String,
    article:{
        type: Schema.Types.ObjectID,
        ref: "Article",
    }
});


const Note = mongoose.model("Note", noteSchema);

module.exports = Note;