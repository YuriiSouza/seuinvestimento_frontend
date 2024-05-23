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
    font: {
      main: '#4d5a50'
    },
    link: {
      main: '#0000ff'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default themeWhite;
