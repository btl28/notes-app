import React, {useState} from "react";
import axios from "axios";
import { Collapse } from "@mui/material";
import Header from "./Header";
import Note from "./Note";
import AddNoteForm from "./AddNoteForm";
import ExpandButton from "./ExpandButton";

const App = () => {
    const [notes, setNotes] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    axios.get()

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
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