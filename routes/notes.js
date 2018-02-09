
const express = require('express');
const router = express.Router();

const Notes = require("../models/comments.js")

router.post("/notes", (req, res) => {
    console.log(req.body);
    const newNote = {
        author: {
            id: req.user._id,
            username: req.user.username,
        },
        comment: req.body.comment,
        createdDate: new Date.now(),
    }

    console.log(newNote);
    Notes.create(newNote, () => {
        if(error) {
            console.log("Failed to create note because of :", error);
        }
    });
    Notes.find({ "author.username": req.user.username }, (error, results) => {
        if (error) {
            return console.log("Something went wrong getting the notes were looking for: ", error);
        }
        res.json;
    });
});
    module.exports = router;