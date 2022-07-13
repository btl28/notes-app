import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {

    const handleClick = () => {
        props.onDelete(props.id);
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <hr></hr>
            <p className="content">{props.content}</p>
            <p className="date">{props.date}</p>

            <div className="delete-btn-container">
                <IconButton onClick={handleClick}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Note;