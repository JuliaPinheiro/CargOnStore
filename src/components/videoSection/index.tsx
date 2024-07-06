/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const VideoSection = () => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <video
        width='auto'
        height='auto'
        autoPlay
        muted
        loop
        src='https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/78a76492-2fdd-4e93-a5fb-5adc7947920e/44b10c59-f7a3-4b1d-a693-180a7f95efa7/main.mp4'
      >
        Seu navegador não suporta o vídeo.
      </video>
      <Typography variant='h3' fontFamily='fantasy' sx={{ margin: '1rem' }}>
        PEGASUS 41
      </Typography>
      <Typography variant='subtitle1'>
        Não desperdice sua energia. Corra de Pegasus.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          marginTop: '1rem',
        }}
      >
        <Button
          href='https://www.nike.com.br/sc/pegasus41'
          target='_blank'
          sx={{
            color: '#FFF',
            backgroundColor: '#000',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#000',
              color: '#FFF',
            },
            minWidth: '150px',
            height: '40px',
          }}
        >
          Saiba Mais
        </Button>

        <Button
          href='https://www.nike.com.br/hotsite/pegasus41'
          target='_blank'
          sx={{
            color: '#FFF',
            backgroundColor: '#000',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#000',
              color: '#FFF',
            },
            minWidth: '150px',
            height: '40px',
          }}
        >
          Ver Lançamento
        </Button>
      </Box>
    </Box>
  );
};

export default VideoSection;
