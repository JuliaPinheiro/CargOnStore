import React from 'react';
import Box from '@mui/material/Box';
import VideoSection from './components/videoSection';
import Carousel from './components/carousel';
import CarouselProduct from './components/productCard';
import Navbar from './components/navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Carousel />
      <Box id='video-section' />
      <VideoSection />
      <Box id='carousel-product' />
      <CarouselProduct />
    </Box>
  );
}

export default App;
