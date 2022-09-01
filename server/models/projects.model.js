const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    picture: {
        type:String,
    },

    projectName: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        trim:true,
        maxLength: 1000,
    },

    completion: {
        type: String,
        trim: true,
        maxLenth: 3000,
    },

})