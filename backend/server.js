const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/notesDB");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
})

const Note = mongoose.model("Note", noteSchema);

app.get("/", asyncHandler(async (req, res) => {
    Note.find({}, (err, foundItems) => {

        if (err) {
            console.log(err);
        }
        else {
            res.send(foundItems);
        }
    });
}));

app.post("/", asyncHandler(async (req, res) => {
    const newNote = new Note(req.body);
    newNote.save();
}));

app.delete("/:ID", asyncHandler(async (req, res) => {
    const deletedNoteId = req.body.ID;

    Note.findByIdAndDelete(deletedNoteId, (err) => {

        if (err) {
            console.log(err);
        }
    });
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})