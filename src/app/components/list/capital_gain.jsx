import React from 'react';
import { Box, Typography } from '@mui/material';

const ListCapital = () => {
  const estiloRetangulo = {
    width: '100%',
    maxWidth: '600px', // Tamanho máximo para manter o design
    height: 'auto',
    marginTop: '2rem',
    backgroundColor: '#f2f4f5',
    borderRadius: '20px',
    boxSizing: 'border-box',
    padding: '1rem',
    overflow: 'auto',
  };

  const estiloTitulo = {
    fontSize: '20px',
    marginBottom: '1rem',
    textAlign: 'left',
  };

  const estiloLista = {
    listStyle: 'none',
    fontSize: '14px', // Ajuste do tamanho da fonte para dispositivos móveis
    padding: 0,
    margin: 0,
  };

  const estiloItem = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column', // Empilhar os itens em telas menores
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const estiloItemContent = {
    display: 'flex',
    flexDirection: 'column',
  };

  const estiloLabel = {
    fontWeight: 'bold',
    margin: 0,
  };

  const estiloValue = {
    margin: 0,
  };

  const items = [
    { id: '1', data: 'julho de 2023', value: 'R$5.600,00' },
    { id: '2', data: 'junho de 2023', value: 'R$3.900,00' },
    { id: '3', data: 'maio de 2023', value: 'R$2.800,00' },
    { id: '4', data: 'abril de 2023', value: 'R$2.400,00' },
    { id: '5', data: 'março de 2023', value: 'R$2.100,00' },
    { id: '6', data: 'fevereiro de 2023', value: 'R$1.800,00' },
    { id: '7', data: 'janeiro de 2023', value: 'R$1.500,00' },
  ];

  return (
    <Box style={estiloRetangulo}>
      <Typography style={estiloTitulo}>Ganho de capital</Typography>
      <ul style={estiloLista}>
        {items.map((item) => (
          <li key={item.id} style={estiloItem}>
            <div style={estiloItemContent}>
              <Typography style={estiloLabel}>Período:</Typography>
              <Typography style={estiloValue}>{item.data}</Typography>
            </div>
            <div style={estiloItemContent}>
              <Typography style={estiloLabel}>Saldo:</Typography>
              <Typography style={estiloValue}>{item.value}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ListCapital;
