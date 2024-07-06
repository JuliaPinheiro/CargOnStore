import React, { useState } from 'react';
import {
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import productsData from '../../../public/data.json';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const productsToShow = isMobile ? 1 : 4;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - productsToShow >= 0 ? prevIndex - productsToShow : 0
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsToShow < productsData.length
        ? prevIndex + productsToShow
        : 0
    );
  };
  const visibleProducts = productsData.slice(
    currentIndex,
    currentIndex + productsToShow
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <IconButton onClick={goToPrevious} disabled={currentIndex === 0}>
        <ArrowBackIosNewIcon />
      </IconButton>
      {visibleProducts.map((product) => (
        <Box
          key={product.id}
          sx={{
            width: isMobile ? 300 : 200,
            height: isMobile ? 280 : 240,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            margin: '0 10px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: isMobile ? 'scale(1)' : 'scale(1.10)',
              textDecoration: 'none',
            },
          }}
        >
          <img
            src={product.image_url}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 128,
              objectFit: 'contain',
            }}
          />
          <Typography variant='body2'>{product.name}</Typography>
          <Typography variant='body2' color='text.secondary'>
            R$ {product.price}
          </Typography>
        </Box>
      ))}
      <IconButton
        onClick={goToNext}
        disabled={currentIndex + productsToShow >= productsData.length}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
