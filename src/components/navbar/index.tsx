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
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem button>
          <ListItemText primary='Videos' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Products' />
        </ListItem>
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

        borderColor: 'divider',
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
            <Button
              sx={{
                color: '#000',
                marginRight: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              Videos
            </Button>
            <Button
              sx={{
                color: '#000',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              Products
            </Button>
          </Box>
        )}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Filter options'>
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label='filter'
              onClick={handleFilterClick}
            >
              <FilterListIcon />{' '}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
