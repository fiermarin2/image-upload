import './uploader.css';
import React, { useRef  } from 'react';
import { Box, Button, Input } from "@mui/material";
import Ok from '../assets/check.png';

const Uploader = ({ link }) => {
  const inputRef = useRef();

  const copyLink = () => {
    inputRef.current.select();
    document.execCommand('copy');
    alert('Link copied to clipboard');
  };

  return (
    <Box className="container">
      <img src={Ok} className="success" />
      <p className='success-message'>Uploaded Successfully!</p>
      <img src={link} className="image-upload" />
      <div className="link-input-container">
        <input
          className="link-input"
          ref={inputRef}
          type="text"
          value={link}
          readOnly
        />
        <button className="copy-button" onClick={copyLink}>
          Copy Link
        </button>
      </div>
    </Box>
  );
}

export default Uploader;