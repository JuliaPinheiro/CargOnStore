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
    text: {
      primary: '#212121',
      secondary: '#4caf50',
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

  typography: {
    fontFamily: [
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
