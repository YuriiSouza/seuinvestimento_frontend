import { Margin, Padding } from '@mui/icons-material';
import React from 'react';

const PainelInvestment = () => {
  const containerStyle = {
    background: '#162c63',
  };

  const painelStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '1rem'
  };

  const cardStyle = {
    backgroundColor: '#f2f4f5',
    textAlign: 'center',
    borderRadius: '10px',
    fontFamily: 'Montserrat, sans-serif',
    width: '16rem',
    height: '7rem',
    display: 'row'
  };

  const headerStyle = {
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 'bold',
    borderRadius: '10px 10px 0 0',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0b935',
    color: '#f2f4f5',
    width: '100%',
};

  const valueStyle = {
    fontSize: '30px',
    fontWeight: '100',
    textAlign: 'center',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={painelStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>
            Cotação
          </div>
          <p style={valueStyle}>R$100,00</p>
        </div>

        <div style={cardStyle}>
          <div style={headerStyle}>N do Titulo - DY</div>
          <p style={valueStyle}>12.20%</p>
        </div>

        <div style={cardStyle}>
          <div style={headerStyle}>P/PV</div>
          <p style={valueStyle}>1.08</p>
        </div>

        <div style={cardStyle}>
          <div style={headerStyle}>Liquidez diária</div>
          <p style={valueStyle}>R$10,30</p>
        </div>

        <div style={cardStyle}>
          <div style={headerStyle}>Variação</div>
          <p style={valueStyle}>21.17%</p>
        </div>
      </div>
    </div>
  );
};

export default PainelInvestment;