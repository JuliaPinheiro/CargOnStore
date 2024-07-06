import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [menuItems] = useState([
    { id: 1, label: 'Home' },
    { id: 2, label: 'Produtos' },
    { id: 3, label: 'Masculino' },
    { id: 4, label: 'Feminino' },
  ]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.id}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleFilterClick = () => {
    console.log('Abrir opções de filtro');
  };

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        width: '100vw',
        maxWidth: '100%',
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
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
        )}
        <Box sx={{ flexGrow: 0 }}>
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
