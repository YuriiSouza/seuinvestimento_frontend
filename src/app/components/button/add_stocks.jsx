import { Box, Button } from '@mui/material';
import React from 'react';
import '@/app/globals.css';

const AddStock = () => {
  return (
    <Box display="flex" alignItems="center" marginBottom="1rem">
      <Button
        sx={{
          minWidth: '24px', // Garante um tamanho mínimo para o botão
          padding: '0rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="/svg/add_button.svg" alt="Adicionar" />
      </Button>
      <p
        style={{
          marginLeft: '0.5rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#FFFFFF',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        }}
      >
        Adicionar Título
      </p>
    </Box>
  );
};

export default AddStock;
