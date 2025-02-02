'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const themeWhite = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f2f4f5',
    },
  },
});

const styleMenuOptions = {
  borderRadius: '8px',
  height: '5rem', 
  gap: 1,
  transition: '0.3s',
  fontFamily: 'Montserrat',
  fontStyle: 'bold',
  fontSize: '1.5rem',
  "&:hover": { 
    backgroundColor: '#f0b935',  // Cor de fundo ao passar o mouse
    color: '#162c63' // Cor do texto ao passar o mouse
  }
}

const styleMenu = {
  flexGrow: 1,
  display: { xs: 'none', md: 'block'},
  fontFamily: 'Allerta',
  fontSize: '1.5rem',
}

const stylePaper = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#162c63',
  color: '#f2f4f5',
    borderRadius: '0px',
  height: '100vh',
  width: '20rem',
}
export default function MenuComponent() {
  const router = useRouter();

  const goTo = (path) => {
    return () => {
      router.push(path);
    };
  };



  return (
    <ThemeProvider theme={themeWhite}>
      <Stack
        width='20rem'
        position='relative'
        top='87px'
        sx={styleMenu}
      >
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper sx={stylePaper}>
            <MenuList>
              <MenuItem sx={styleMenuOptions} onClick={goTo('/home/investimento')}
              >
                <MonetizationOnIcon />
                Investimentos
              </MenuItem>

              <MenuItem sx={styleMenuOptions} onClick={goTo('/home/patrimonio')}>
                <CandlestickChartIcon />
                Patrimônio
              </MenuItem>
            </MenuList>
          </Paper>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
