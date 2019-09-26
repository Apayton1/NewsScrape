const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique:true,
    },
    
    url: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    notes: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Note"
        }],
        article:String
    },
    
    saved:{
        type: Boolean,
        default:false,
    }  
});

const Article = mongoose.model("Article", articleSchema)

module.exports = Article