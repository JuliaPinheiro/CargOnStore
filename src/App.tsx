import React from 'react';
import Box from '@mui/material/Box';
import VideoSection from './components/videoSection';
import Carousel from './components/carousel';

import Navbar from './components/navbar';
import CarouselProduct from './components/productCard/CarouselProduct';
import ProductsList from './components/productCard/ProductsList';

function App() {
  return (
    <Box>
      <Navbar />
      <Carousel />
      <Box id='video-section' />
      <VideoSection />
      <Box id='carousel-product' />
      <CarouselProduct />
      <Box id='products-list' />
      <ProductsList />
    </Box>
  );
}

export default App;
