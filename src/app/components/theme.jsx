// src/theme.js

import { createTheme } from '@mui/material/styles';

const themeWhite = createTheme({
  palette: {
    primary: {
      main: '#f0b935',
    },
    secondary: {
      main: '#162c63',
    },
    error: {
      main: '#ff2950',
    },
    success: {
      main: '#24ff00',
    },
    background: {
      default: '#f2f4f5',
      paper: '#f2f4f5',
    },
    text: {
      primary: '#4d5a50',
      secondary: '#f2f4f5',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0, // Exemplo de uma propriedade que você pode definir para todos os botões
      },
    },
    // Adicione mais overrides conforme necessário para outros componentes do Material-UI
  },
});

export default themeWhite;
