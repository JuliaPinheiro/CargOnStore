import React, { useState } from 'react';
import {
  Modal,
  Box,
  IconButton,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

interface ProductDetails {
  id: number;
  name: string;
  details: string;
  price: number;
  image_url: string;
  available_sizes: string[];
}

interface ModalProductProps {
  open: boolean;
  onClose: () => void;
  productDetails: ProductDetails;
}

const ModalProduct: React.FC<ModalProductProps> = ({
  open,
  onClose,
  productDetails,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      //TODO Add to cart logic
      console.log(
        `Added to cart: ${productDetails.name}, Size: ${selectedSize}`
      );
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-product-title'
      aria-describedby='modal-product-description'
    >
      <Box sx={style}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id='modal-product-title'
          variant='h5'
          component='h2'
          sx={{ fontWeight: 'bold' }}
        >
          {productDetails.name}
        </Typography>
        <img
          src={productDetails.image_url}
          alt={productDetails.name}
          style={{
            width: '100%',
            maxHeight: '200px',
            objectFit: 'contain',
            margin: '16px 0',
          }}
        />
        <Typography
          id='modal-product-description'
          variant='body1'
          sx={{ mt: 2, textAlign: 'justify' }}
        >
          {productDetails.details}
        </Typography>
        <FormControl component='fieldset' sx={{ mt: 2 }}>
          <FormGroup row>
            {productDetails.available_sizes.map((size) => (
              <FormControlLabel
                key={size}
                control={
                  <Checkbox
                    checked={selectedSize === size}
                    onChange={() => handleSizeChange(size)}
                    sx={{
                      color: selectedSize === size ? 'green' : 'default',
                      '&.Mui-checked': {
                        color: 'green',
                      },
                    }}
                  />
                }
                label={size}
              />
            ))}
          </FormGroup>
        </FormControl>
        <Button
          variant='contained'
          color='primary'
          onClick={handleAddToCart}
          startIcon={<ShoppingCartIcon />}
          disabled={!selectedSize}
          sx={{ mt: 2 }}
        >
          Adicionar ao Carrinho
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalProduct;
