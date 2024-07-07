import React, { useState, useCallback } from 'react';
import {
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import productsData from '../../../public/data.json';
import ModalProduct from '../modalProduct';

const Product = ({
  product,
  isMobile,
}: {
  product: any;
  isMobile: boolean;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box
      role='button'
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
        cursor: 'pointer',
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
      <Button
        variant='contained'
        sx={{
          marginTop: 1,
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: 'darkgrey',
          },
        }}
        onClick={handleOpenModal}
      >
        Comprar
      </Button>
      <ModalProduct
        open={isModalOpen}
        onClose={handleCloseModal}
        productDetails={product}
      />
    </Box>
  );
};

const CarouselProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const productsToShow = isMobile ? 1 : 4;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - productsToShow, 0));
  }, [productsToShow]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsToShow < productsData.length
        ? prevIndex + productsToShow
        : 0
    );
  }, [productsToShow]);

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
      <IconButton
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label='Previous'
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      {visibleProducts.map((product) => (
        <Product key={product.id} product={product} isMobile={isMobile} />
      ))}
      <IconButton
        onClick={goToNext}
        disabled={currentIndex + productsToShow >= productsData.length}
        aria-label='Next'
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CarouselProduct;
