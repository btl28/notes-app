const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/notesDB");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
})

const Note = mongoose.Model("Note", noteSchema);

app.get("/", async (req, res) => {
    res.json({message: "Hi"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})