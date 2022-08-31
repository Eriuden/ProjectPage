const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    picture: {
        type:String,
    },

    ProjectName: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        trim:true,
        maxLength: 1000,
    },

    complétion: {
        type: String,
        trim: true,
        maxLenth: 3000,
    },

})