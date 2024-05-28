import React from 'react';
import StockChart from '../graphics/stock';

const JustStockList = () => {
  const estiloRetangulo = {
    width: '100%',
    height: '30rem',
    borderRadius: '20px',
    boxSizing: 'border-box',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    margin: '1rem'
  };

  const estiloLista = {
    height: '100%',
    borderRadius: '20px',
    backgroundColor: '#f1f5f1',
    width: '30%',
    padding: 0,
    margin: 0,
    listStyle: 'none', // Remover padding e margin do ul
  };

  const estiloItem = {
    borderBottom: '1px solid #ccc',
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

  const grafico = {
    width: '70%',
    marginRight: '1rem', // Espaço entre o gráfico e a lista
  };

  const stocks = [
    {'valorization': '20%', 'image': '/svg/amazon.svg', 'name': 'Amazon Inc.', 'sigla': 'AMZN', 'valor': 'R$ 110,00', 'valorvalorizado': 'R$ 20,00'},
    {'valorization': '42%', 'image': '/svg/coca.svg', 'name': 'Coca-Cola Inc.', 'sigla': 'KO', 'valor': 'R$ 321,00', 'valorvalorizado': 'R$ 41,00'},
    {'valorization': '10%', 'image': '/svg/bmw.svg', 'name': 'Bayerische Inc.', 'sigla': 'BMW', 'valor': 'R$ 42,00', 'valorvalorizado': 'R$ 10,00'},
    {'valorization': '42%', 'image': '/svg/microsoft.svg', 'name': 'Microsoft Inc.', 'sigla': 'AMZN', 'valor': 'R$ 234,00', 'valorvalorizado': 'R$ 123,00'},
    {'valorization': '1%', 'image': '/svg/ups.svg', 'name': 'uoc Inc.', 'sigla': 'sdfg', 'valor': 'R$ 222,00', 'valorvalorizado': 'R$ 2,00'}
  ];

  return (
    <div style={estiloRetangulo}>
      
      <div style={grafico}>
        <StockChart />
      </div>

      <div style={estiloLista}>
        <ul style={{ padding: 0, margin: 0 }}>
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
    </div>
  );
};

export default JustStockList;
