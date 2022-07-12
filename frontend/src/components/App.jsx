import React, {useEffect, useState} from "react";
import axios from "axios";
import { Collapse } from "@mui/material";
import Header from "./Header";
import Note from "./Note";
import AddNoteForm from "./AddNoteForm";
import ExpandButton from "./ExpandButton";

const App = () => {
    const [notes, setNotes] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const addNote = async (newNote) => {

        axios.post("http://localhost:5000", newNote)
        .then(response => {
            // console.log(response);
        })
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        });
    }

    const getNotes = async () => {
        axios.get("http://localhost:5000").then(response => {
            setNotes(response.data);
        })
    }

    useEffect(() => {
        getNotes();
    }, []);
    
    const deleteNote = async (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
        let noteId = notes[id]._id;
        axios.delete(`http://localhost:5000/ID`, {data: {
            ID: noteId
        }}).then(response => {
            console.log(response.data);
        });
    }

    const expandForm = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <Header />
            <Collapse in={isExpanded}>
                <AddNoteForm onAdd={addNote} />
            </Collapse>
            <ExpandButton onCreateClick={expandForm} />
            <div className="notes-container">
                {notes.map((item, index) => {
                    return (<Note
                        key={index}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        onDelete={deleteNote}
                        id={index} />
                    );
                })}
            </div>
        </div>
    );
}

export default App;