import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', mt: '0', p: '20px', justifyContent: 'space-between', gap: '0px' }}>  
    {/* Text Content */}
    <Stack sx={{ flex: 1, ml: { sm: '50px' }, mt: '0px', alignItems: 'flex-start'}}>
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="10px">
        Check out the most effective exercises personalized to you
      </Typography>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
        Explore Exercises
      </a>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px', ml: '-10px' }}>
        Exercise
      </Typography>
    </Stack>
    <Box sx={{ flex: 1 }} ml='10px' mr='30px'>
      <img src={HeroBannerImage} alt="hero-banner" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
    </Box>
  </Box>
);
export default HeroBanner;



