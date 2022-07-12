import React from "react";
import PaletteIcon from '../../node_modules/@mui/icons-material/Palette';

const Header = () => {
    return (
        <div className="header">
            <h1>Jot.</h1>
            <PaletteIcon sx={{ fontSize: 40 }} />
        </div>
    );
}

export default Header;