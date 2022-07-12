import React from "react";

const Note = (props) => {

    const handleClick = () => {
        props.onDelete(props.id);
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.date}</p>
            <button onClick={handleClick}>Delete</button>
            <button>Edit</button>
        </div>
    );
}

export default Note;