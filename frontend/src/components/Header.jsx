import React from "react";
import PaletteIcon from '@mui/icons-material/Palette';
import { IconButton } from "@mui/material";

const Header = () => {
    return (
        <div className="header">
            <h1>Jot.</h1>
            <IconButton className="theme-btn">
                <PaletteIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>
        </div>
    );
}

export default Header;