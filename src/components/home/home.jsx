import './home.css';
import img from '../assets/image.svg';
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Input } from "@mui/material";
import { useDropzone } from "react-dropzone";

export const Home = ({ setLink, setLoading }) => {
  const [image, setImage] = useState(null);
  const inputFile = React.useRef(null);

  const uploadFile = async () => {
    if (!image) {
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "zd2vjmhg"); 

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwfzfkjfk/image/upload",
        formData
      );

      setLoading(false);
      setLink(response.data.secure_url);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!!image) uploadFile();
  }, [image]);

  const onDrop = useCallback((files) => {
    setUploadFile(files[0])
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop, 
    accept: { "image/jpeg": [".jpeg", ".png"] }
  });

  const setUploadFile = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Box className="container">
      <p className="title">Upload your image</p>
      <p className="subtitle">File Should be jpeg, Png,...</p>
      <Box {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <Box className="imgDropzone">
          <img src={img} />
        </Box>
        <div className="text">Drag & Drop your image here</div>
      </Box>
      <p className="subtitle">Or</p>
      <Button 
        className="uploadBtn" 
        variant="contained"
        component="label"
      >
        Choose a file
        <Input 
          ref={inputFile} 
          type="file" 
          style={{ display: "none" }} 
          onChange={setUploadFile}
        />
      </Button>
    </Box>
  );
}