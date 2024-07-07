import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/navbar';
import ProductsList from '../components/productCard/ProductsList';

const ProductListPage = () => {
  return (
    <Box>
      <Navbar />
      <Box id='product-list' />
      <ProductsList />
    </Box>
  );
};

export default ProductListPage;
