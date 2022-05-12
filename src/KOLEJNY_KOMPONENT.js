import {Button} from "@mui/material";
import React from "react";

export const PRZYCISK_CZYTAJ = (props) => {
    const handleClick = () => alert('clicked')

    return (
        <Button variant="outlined" type="button" onClick={handleClick}>
            CZYTAJ
        </Button>
    );
};