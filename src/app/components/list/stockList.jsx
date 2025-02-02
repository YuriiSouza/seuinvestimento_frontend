import React from 'react';
import PieCarteira from '../graphics/pieCarteira';
import { Box, Typography } from '@mui/material';

const StockList = () => {
  const estiloRetangulo = {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    marginTop: '2rem',
    marginLeft: '1rem',
    backgroundColor: '#f2f4f5',
    borderRadius: '20px',
    boxSizing: 'border-box',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centra o conteúdo na tela
  };

  const estiloLista = {
    width: '100%',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const estiloItem = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Permite que os itens se ajustem nas telas menores
  };

  const estiloItemContent = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap', // Ajusta o conteúdo dos itens para se alinhar nas telas menores
  };

  const estiloValorization = {
    marginRight: '10px',
    fontWeight: 'bold',
  };

  const estiloImagem = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const estiloDetails = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
  };

  const estiloName = {
    fontWeight: 'bold',
    margin: 0,
  };

  const estiloSigla = {
    color: '#666',
    margin: 0,
  };

  const estiloValores = {
    textAlign: 'right',
    marginTop: '10px', // Adiciona um pouco de espaço no topo
  };

  const estiloValor = {
    margin: 0,
  };

  const estiloValorValorizado = {
    margin: 0,
    color: '#4caf50',
  };

  const stocks = [
    { 'valorization': '20%', 'image': '/svg/amazon.svg', 'name': 'Amazon Inc.', 'sigla': 'AMZN', 'valor': 'R$ 110,00', 'valorvalorizado': 'R$ 20,00' },
    { 'valorization': '42%', 'image': '/svg/coca.svg', 'name': 'Coca-Cola Inc.', 'sigla': 'KO', 'valor': 'R$ 321,00', 'valorvalorizado': 'R$ 41,00' },
    { 'valorization': '-10%', 'image': '/svg/bmw.svg', 'name': 'Bayerische Inc.', 'sigla': 'BMW', 'valor': 'R$ 42,00', 'valorvalorizado': 'R$ 10,00' },
    { 'valorization': '42%', 'image': '/svg/microsoft.svg', 'name': 'Microsoft Inc.', 'sigla': 'AMZN', 'valor': 'R$ 234,00', 'valorvalorizado': 'R$ 123,00' },
    { 'valorization': '1%', 'image': '/svg/ups.svg', 'name': 'uoc Inc.', 'sigla': 'sdfg', 'valor': 'R$ 222,00', 'valorvalorizado': 'R$ 2,00' },
  ];

  return (
    <Box style={estiloRetangulo}>
      <PieCarteira />

      <ul style={estiloLista}>
        {stocks.map((stock, index) => (
          <li key={index} style={estiloItem}>
            <div style={estiloItemContent}>
              <span style={estiloValorization}>{stock.valorization}</span>
              <img src={stock.image} alt={stock.name} style={estiloImagem} />
              <div style={estiloDetails}>
                <Typography style={estiloName}>{stock.name}</Typography>
                <Typography style={estiloSigla}>{stock.sigla}</Typography>
              </div>
            </div>
            <div style={estiloValores}>
              <Typography style={estiloValor}>{stock.valor}</Typography>
              <Typography style={estiloValorValorizado}>{stock.valorvalorizado}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default StockList;
