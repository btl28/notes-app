import React, { useState } from "react";

const AddNoteForm = (props) => {
    const [note, setNote] = useState({title: "", content: "", date: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const handleSubmit = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            date: ""
        });
        event.preventDefault();
    }

    const handleClear = (event) => {
        setNote({
            title: "",
            content: "",
            date: ""
        });
        event.preventDefault();
    }

    return (
        <div className="form-container">
            <form>
                <input onChange={handleChange} className="title-input" name="title" id="title" type="text" placeholder="Enter title" value={note.title}></input>
                <textarea onChange={handleChange} rows="4" className="content-input" name="content" id="content" placeholder="Enter note" value={note.content}></textarea>
                <input onChange={handleChange} className="date-input" name="date" id="date" type="text" placeholder="Enter date" value={note.date}></input>
                
                <button className="add-btn" onClick={handleSubmit} type="submit">
                    Add
                </button>
                <button className="clear-btn" onClick={handleClear}>
                    Clear
                </button>
            </form>
        </div>   
    );
}

export default AddNoteForm;