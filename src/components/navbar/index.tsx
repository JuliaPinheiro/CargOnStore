import React, { useState } from 'react';
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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    { label: 'Home', anchor: '#', onClick: scrollToTop },
    {
      label: 'Lançamento',
      anchor: '#VideoSection',
      onClick: () => scrollToSection('video-section'),
    },
    {
      label: 'Promoção',
      anchor: '#CarouselProduct',
      onClick: () => scrollToSection('carousel-product'),
    },
  ];

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
                    <ListItem
                      button
                      key={item.label}
                      component='a'
                      href={item.anchor}
                      onClick={item.onClick}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            navItems.map((item) => (
              <Button
                key={item.label}
                href={item.anchor}
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
            ))
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ height: '64px' }} />
    </>
  );
};

export default Navbar;
