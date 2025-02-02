"use client";

import React from 'react';
import CarteiraGraphic from '@/app/components/graphics/carteira';
import { Box, Grid } from '@mui/material';
import Add_stock from '@/app/components/button/add_stocks';
import ListCapital from '@/app/components/list/capital_gain';
import StockList from '@/app/components/list/stockList';

const Patrimonio = () => {
  return (
    <Box
      width="100%"
      marginTop="6rem"
      marginRight="1rem"
      marginLeft="1rem"
    >
      {/* Componente para adicionar estoque */}
      <Add_stock />

      {/* Gráfico de Carteira */}
      <CarteiraGraphic />

      {/* Container flexível para a lista de capital e ações */}
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between">
        <ListCapital />
        <StockList />
      </Box>
    </Box>
  );
};

export default Patrimonio;
