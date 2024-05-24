import { Box, Button, ThemeProvider } from '@mui/material';
import React from 'react';
import '@/app/globals.css'

const Add_stock = () => {


  return (
    <Box
        marginBottom='1rem'
        display='flex'
    >
        <Button>
            <img src="/svg/add_button.svg" />
        </Button>
        <p>Adcionar Título</p>
    </Box>
);
}

export default Add_stock;
