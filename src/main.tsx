import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createTheme, ThemeProvider } from '@mui/material';

const rootContainer = document.getElementById('root') as HTMLElement;

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
  },
});

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
