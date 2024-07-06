import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
      paper: '#fafafa',
    },
    primary: {
      main: '#212121',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  spacing: 8,  
});

theme = responsiveFontSizes(theme);

export default theme;
