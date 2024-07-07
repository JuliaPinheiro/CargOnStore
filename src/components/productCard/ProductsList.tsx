import React, { useState } from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import productsData from '../../../public/dataProductList.json';
import ModalProduct from '../modalProduct';
import ProductFilter from '../filters/ProductFilter';
import { formatPrice } from '../../helpers/format';

const Product = ({ product }: { product: any }) => {
  const [isModalOpen, useModal] = useState(false);

  const handleOpenModal = () => useModal(true);
  const handleCloseModal = () => useModal(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        role='button'
        sx={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.10)',
            textDecoration: 'none',
          },
          cursor: 'pointer',
          borderRadius: '8px',
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
        <Typography variant='body2'>{formatPrice(product.price)}</Typography>
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
    </Grid>
  );
};

const ProductsList = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    setSelectedTypes((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  const removeType = (type: string) => {
    setSelectedTypes((prev) => prev.filter((t) => t !== type));
  };

  const filteredProducts = productsData.filter((product) =>
    selectedTypes.length > 0 ? selectedTypes.includes(product.type) : true
  );

  const uniqueTypes = Array.from(
    new Set(productsData.map((product) => product.type))
  );

  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <ProductFilter
        selectedTypes={selectedTypes}
        handleTypeChange={handleTypeChange}
        uniqueTypes={uniqueTypes}
      />
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsList;
