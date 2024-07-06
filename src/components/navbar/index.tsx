import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';

const Navbar: React.FC = () => {
  const [menuItems] = useState([
    { id: 1, label: 'Home' },
    { id: 2, label: 'Produtos' },
    { id: 3, label: 'Masculino' },
    { id: 4, label: 'Feminino' },
  ]);

  const handleFilterClick = () => {
    console.log('Abrir opções de filtro');
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {' '}
          {menuItems.map((item) => (
            <Button
              key={item.id}
              sx={{
                color: '#000',
                marginRight: 2,
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '3px',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          {' '}
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='filter'
            onClick={handleFilterClick}
          ></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
