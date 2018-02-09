const mongoose = require('mongoose');
const aSchema = mongoose.Schema;
const notesSchema = new aSchema({
    id: {
        type: mongoose.aSchema.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: mongoose.aSchema
    },
    comment: {
        type: mongoose.aSchema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: mongoose.aSchema.Types.ObjectId,
        ref: "User"
    }

})

const Notes = mongoose.model("Notes", notesSchema)
module.exports = Notes;