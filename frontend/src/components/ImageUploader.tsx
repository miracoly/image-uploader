import React, {BaseSyntheticEvent, useState} from "react";
import Icon from "../image.svg";
import "./ImageUploader.css";
import {Box, Button, Typography} from "@material-ui/core";

function ImageUploader() {

    const [imageUrl, setImageUrl] = useState("");

    function handleFileSelection(event: BaseSyntheticEvent) {

        try {
            const imageFile: any = event.target.files[0];
            setImageUrl(URL.createObjectURL(imageFile));

            fetch('http://localhost:8080', {
                method: 'POST',
                body: imageFile
            }).then(
                response => response.json() // if the response is a JSON object
            ).then(
                success => console.log(success) // Handle the success response object
            ).catch(
                error => console.log(error) // Handle the error response object
            );

        } catch (error) {
            console.log("Error while uploading file");
        }
    }

    return (
        <Box className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Upload your image
            </Typography>

            {imageUrl
                ? (
                    <Box className="uploaded-box">
                        <img src={imageUrl} alt="uploaded file" className="uploaded-image"/>
                    </Box>)
                : (
                    <>
                        <Typography variant="body1" gutterBottom>File should be jpeg, png...</Typography>
                        <Box className="drag-n-drop">
                            <img src={Icon} alt="mountain" id="icon" className="drag-n-drop-image"/>
                            <Typography variant="body2">Drag & Drop your image here</Typography>
                        </Box>
                        <Typography variant="body1" gutterBottom>or</Typography>
                        <Button component="label" variant="contained" color="primary">
                            Choose a File<input type="file" hidden onChange={handleFileSelection}/>
                        </Button>
                    </>
                )
            }

        </Box>
    );
}

export default ImageUploader;