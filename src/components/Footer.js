import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo2.png';

const Footer = () => (
  <Box mt="40px" bgcolor="#ffeb3c">
    <Stack gap="30px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="50px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '150px' }} />
    </Stack>
  </Box>
);

export default Footer;
