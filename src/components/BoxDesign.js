import React from 'react';
import Box from '@material-ui/core/Box';

const BoxDesign = ({ children }) => {
  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow={3}
      style={{ marginBottom: '20px' }}
    >
      {children}
    </Box>
  );
};

export default BoxDesign;
