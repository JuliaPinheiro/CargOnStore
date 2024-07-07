import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const navItems = [
    { label: 'Home', anchor: '/', onClick: scrollToTop },
    {
      label: 'Lançamento',
      anchor: '/#video-section',
      onClick: () => {},
    },
    {
      label: 'Promoção',
      anchor: '/#carousel-product',
      onClick: () => {},
    },
    {
      label: 'Produtos',
      anchor: '/products',
      onClick: () => {},
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      scrollToSection(id);
    }
  }, [location]);

  return (
    <>
      <AppBar
        position='fixed'
        color='default'
        sx={{ color: 'black', fontFamily: theme.typography.fontFamily }}
      >
        <Toolbar sx={{ justifyContent: isMobile ? 'flex-start' : 'center' }}>
          {isMobile ? (
            <>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='left'
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.anchor}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <ListItem button onClick={item.onClick}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            navItems.map((item) => (
              <Link
                key={item.label}
                to={item.anchor}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button
                  onClick={item.onClick}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                    },
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ height: '64px' }} />
    </>
  );
};

export default Navbar;
