import React from 'react';

const ListCapital = () => {
  const estiloRetangulo = {
    width: '40%',
    height: '30rem',
    marginTop: '2rem',
    backgroundColor: '#f2f4f5',
    borderRadius: '20px',
    boxSizing: 'border-box',
    padding: '1rem',
    overflow: 'auto'
  };

  const estiloTitulo = {
    fontSize: '20px',
    marginBottom: '1rem',
    textAlign: 'left',
  };

  const estiloLista = {
    listStyle: 'none',
    fontSize: '12px',
    padding: 0,
  };

  const estiloItem = {
    backgroundColor: '#',
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
    {
      'id': '1',
      'data': 'julho de 2023',
      'value': 'R$5.600,00'
    },
    {
      'id': '2',
      'data': 'junho de 2023',
      'value': 'R$3.900,00'
    },
    {
      'id': '3',
      'data': 'maio de 2023',
      'value': 'R$2.800,00'
    },
    {
      'id': '4',
      'data': 'abril de 2023',
      'value': 'R$2.400,00'
    },
    {
      'id': '5',
      'data': 'março de 2023',
      'value': 'R$2.100,00'
    },
    {
      'id': '6',
      'data': 'fevereiro de 2023',
      'value': 'R$1.800,00'
    },
    {
      'id': '7',
      'data': 'janeiro de 2023',
      'value': 'R$1.500,00'
    },
  ];

  const options = {
    series: [20, 20, 20, 20, 20],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };
  
  return (
    <div style={estiloRetangulo}>
      <h1 style={estiloTitulo}>Ganho de capital</h1>
      <ul style={estiloLista}>
        {items.map((item) => (
          <li key={item.id} style={estiloItem}>
            <div style={estiloItemContent}>
              <p style={estiloLabel}>Período:</p>
              <p style={estiloValue}>{item.data}</p>
            </div>
            <div style={estiloItemContent}>
              <p style={estiloLabel}>Saldo:</p>
              <p style={estiloValue}>{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCapital;
