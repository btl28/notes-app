import React from "react";
import CreateIcon from '@mui/icons-material/Create';

const ExpandButton = (props) => {
    
    const handleClick = () => {
        props.onCreateClick();
    }

    return (
        <div onClick={handleClick} className="expand-btn">
            <CreateIcon sx={{ fontSize: 50 }} />
        </div>
    );
}

export default ExpandButton;