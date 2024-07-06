// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import productsData from '../../../public/data.json';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import theme from '../../themes/theme';

interface Product {
  id: number;
  name: string;
  image_url: string;
  price: number;
  details: string;
}

const ProductList = () => {
  return (
    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
      {productsData.map((product: Product) => (
        <Grid item xs={12} sm={8} md={6} lg={2} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      sx={{
        maxWidth: 240,
        maxHeight: 200,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 128, height: 128, margin: 'auto' }}
        image={product.image_url}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant='body2' component='div'>
          {product.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          R$ {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductList;
