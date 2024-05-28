import React from 'react';
import PieCarteira from '../graphics/pieCarteira';

const StockList = () => {
  const estiloRetangulo = {
    width: '60%',
    height: '30rem',
    marginTop: '2rem',
    marginLeft: '1rem',
    backgroundColor: '#f2f4f5',
    borderRadius: '20px',
    boxSizing: 'border-box',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const estiloLista = {
    width: '60%',
    listStyle: 'none',
    padding: 0,
  };

  const estiloItem = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const estiloItemContent = {
    display: 'flex',
    alignItems: 'center',
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
  };

  const estiloValor = {
    margin: 0,
  };

  const estiloValorValorizado = {
    margin: 0,
    color: '#4caf50',
  };

  const stocks = [
    {'valorization': '20%', 'image': '/svg/amazon.svg', 'name': 'Amazon Inc.', 'sigla': 'AMZN', 'valor': 'R$ 110,00', 'valorvalorizado': 'R$ 20,00'},
    {'valorization': '42%', 'image': '/svg/coca.svg', 'name': 'Coca-Cola Inc.', 'sigla': 'KO', 'valor': 'R$ 321,00', 'valorvalorizado': 'R$ 41,00'},
    {'valorization': '-10%', 'image': '/svg/bmw.svg', 'name': 'Bayerische Inc.', 'sigla': 'BMW', 'valor': 'R$ 42,00', 'valorvalorizado': 'R$ 10,00'},
    {'valorization': '42%', 'image': '/svg/microsoft.svg', 'name': 'Microsoft Inc.', 'sigla': 'AMZN', 'valor': 'R$ 234,00', 'valorvalorizado': 'R$ 123,00'},
    {'valorization': '1%', 'image': '/svg/ups.svg', 'name': 'uoc Inc.', 'sigla': 'sdfg', 'valor': 'R$ 222,00', 'valorvalorizado': 'R$ 2,00'}
]


  return (
    <div style={estiloRetangulo}>
      <PieCarteira />

      <ul style={estiloLista}>
        {stocks.map((stock, index) => (
          <li key={index} style={estiloItem}>
            <div style={estiloItemContent}>
              <span style={estiloValorization}>{stock.valorization}</span>
              <img src={stock.image} alt={stock.name} style={estiloImagem} />
              <div style={estiloDetails}>
                <p style={estiloName}>{stock.name}</p>
                <p style={estiloSigla}>{stock.sigla}</p>
              </div>
            </div>
            <div style={estiloValores}>
              <p style={estiloValor}>{stock.valor}</p>
              <p style={estiloValorValorizado}>{stock.valorvalorizado}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
