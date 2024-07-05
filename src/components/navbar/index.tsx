import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const Navbar: React.FC = () => {
  const [menuItems] = useState([
    { id: 1, label: 'CargOn Promo' },
    { id: 2, label: 'Produtos' },
    { id: 3, label: 'Masculino' },
    { id: 4, label: 'Feminino' },
  ]);

  const handleFilterClick = () => {
    console.log('Abrir opções de filtro');
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{
            flexGrow: 0.4,
            display: { xs: 'none', sm: 'block' },
          }}
        >
          CargOn Store
        </Typography>
        <Box
          sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}
        >
          {menuItems.map((item) => (
            <Button key={item.id} color='inherit'>
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          color='inherit'
          aria-label='open filter'
          onClick={handleFilterClick}
        >
          <FilterListIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
