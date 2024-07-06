// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import Navbar from './components/navbar';
import Box from '@mui/material/Box';

import VideoSection from './components/videoSection';
import Carousel from './components/carousel';
import CarouselProduct from './components/productCard';

function App() {
  return (
    <Box>
      <Navbar />
      <Box mt={'0.5rem'} mb={''}>
        <Carousel />
      </Box>
      <Box mt={'0.5rem'} mb={''}>
        <VideoSection />
      </Box>
      <Box mt={'3rem'}>
        <CarouselProduct />
      </Box>
    </Box>
  );
}

export default App;
