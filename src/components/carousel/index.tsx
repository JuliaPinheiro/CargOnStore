import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const phrases = [
    'NIKE PROMO começou! aproveite ofertas imperdíveis',
    'Novo Pegasus 41 não desperdice sua energia!',
    'Fique em forma com o novo Air Max 2024!',
    'Aproveite o novo lançamento de tênis de corrida!',
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const nextPhrase = () => {
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  const prevPhrase = () => {
    setCurrentPhraseIndex(
      (prevIndex) => (prevIndex - 1 + phrases.length) % phrases.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextPhrase, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      {!isMobile && (
        <IconButton onClick={prevPhrase} aria-label='anterior' size='medium'>
          <ArrowBackIosIcon fontSize='medium' />
        </IconButton>
      )}
      <Typography
        variant={isMobile ? 'body2' : 'h6'}
        sx={{ padding: isMobile ? 1 : 2 }}
      >
        {phrases[currentPhraseIndex]}
      </Typography>
      {!isMobile && (
        <IconButton onClick={nextPhrase} aria-label='próxima' size='medium'>
          <ArrowForwardIosIcon fontSize='medium' />
        </IconButton>
      )}
    </Box>
  );
};

export default Carousel;
