import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import VideoSection from '../components/videoSection';
import CarouselProduct from '../components/productCard/CarouselProduct';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Carousel />
      <Box id='video-section'>
        <VideoSection />
      </Box>
      <Box id='carousel-product'>
        <CarouselProduct />
      </Box>
    </Box>
  );
};

export default HomePage;
