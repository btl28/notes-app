import React, { useState } from "react";
import Collapse from '@mui/material/Collapse';
import AddNoteForm from "./AddNoteForm";

const CollapseMenu = () => {
    const [checked, setChecked] = useState(true);

    function btnClick() {
        setChecked(!checked);
        console.log(checked);
    }

    return (
        <div>
            <button onClick={btnClick}>Click</button>
            <div>
                <Collapse in={checked}><AddNoteForm /></Collapse>
            </div> 
        </div>
    );
}

export default CollapseMenu;