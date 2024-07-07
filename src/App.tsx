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
      <Box id='VideoSection' />
      <VideoSection />
      <Box id='CarouselProduct' />
      <CarouselProduct />
    </Box>
  );
}

export default App;
