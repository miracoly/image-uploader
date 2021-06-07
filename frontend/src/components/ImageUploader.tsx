import React from "react";
import Icon from "../image.svg";
import "./ImageUploader.css";
import {Box, Button, Typography} from "@material-ui/core";

function ImageUploader() {

    return (
        <Box className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Upload your image
            </Typography>
            <Typography variant="body1" gutterBottom>File should be jpeg, png...</Typography>
                <Box className="drag-n-drop">
                    <img src={Icon} alt="mountain" className="image"/>
                    <Typography variant="body2">Drag & Drop your image here</Typography>
                </Box>
            <Typography variant="body1" gutterBottom>or</Typography>
            <Button variant="contained" color="primary">Choose a file</Button>
        </Box>
    );
}

export default ImageUploader;