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
      <Carousel />
      <VideoSection />
      <CarouselProduct />
    </Box>
  );
}

export default App;
