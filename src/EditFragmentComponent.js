import {Button} from "@mui/material";
import React from "react";

export const EditFragmentComponent = (props) => {
    const handleClick = () => alert('clicked')

    return (
        <Button variant="outlined" type="button" onClick={handleClick}>
            Edytuj
        </Button>
    );
};