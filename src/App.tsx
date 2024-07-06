import React from 'react';
import Navbar from './components/navbar';
import Box from '@mui/material/Box';
import VideoSection from './components/videoSection';
import Carousel from './components/carousel';
import CarouselProduct from './components/productCard';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <Box>
      <Navbar />

      <Element name='carousel'>
        <Carousel />
      </Element>
      <Element name='videos'>
        <VideoSection />
      </Element>
      <Element name='products'>
        <CarouselProduct />
      </Element>
    </Box>
  );
}

export default App;
