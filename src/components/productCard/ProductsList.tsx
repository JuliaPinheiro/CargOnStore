import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import productsData from '../../../public/dataProductList.json';
import ModalProduct from '../modalProduct';

const Product = ({ product }: { product: any }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
          margin: '10px',
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
        <Typography variant='body2'>R$ {product.price}</Typography>
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
  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <Grid container spacing={2}>
        {' '}
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsList;
