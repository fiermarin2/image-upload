import React from 'react';
import './loading.css';
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box className="container-loading">
      <div className="loading-text">Uploading...</div>
      <div className="loading-bar">
        <div className="loading-bar-inner"></div>
      </div>
    </Box>
  );
};

export default Loading;