import React, { useState } from "react";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CheckIcon from '@mui/icons-material/Check';

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
        if (note.title !== "" || note.content !== "") {
            props.onAdd(note);
        }   
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
                <input onChange={handleChange} className="title-input form-input" name="title" id="title" type="text" placeholder="Enter title" value={note.title}></input>
                <textarea onChange={handleChange} rows="4" className="content-input form-input" name="content" id="content" placeholder="Enter note" value={note.content}></textarea>
                <input onChange={handleChange} className="date-input form-input" name="date" id="date" type="text" placeholder="Enter date" value={note.date}></input>
                
                <button className="clear-btn form-btn" onClick={handleClear}>
                    <ClearAllIcon sx={{ fontSize: 24 }} />
                </button>
                <button className="add-btn form-btn" onClick={handleSubmit} type="submit">
                    <CheckIcon sx={{ fontSize: 24 }} />
                </button>
            </form>
        </div>   
    );
}

export default AddNoteForm;