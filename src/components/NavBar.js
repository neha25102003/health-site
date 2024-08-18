import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack 
      direction="row" 
      justifyContent="space-between" 
      sx={{ 
        gap: { sm: '122px', xs: '40px' }, 
        px: '20px',
        position: 'absolute', // Absolute positioning to overlap content
        top: 0, // Aligns the navbar at the top
        left: 0, // Starts from the left edge
        width: '30%', // Covers 50% of the viewport width
        backgroundColor: 'white', // Ensures readability of the text
        zIndex: 1000, // Keeps the navbar on top of other content
        height: '60px', // Adjust height as needed
        alignItems: 'center', // Aligns items vertically in the navbar
      }}
    >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '60px', height: '60px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;

