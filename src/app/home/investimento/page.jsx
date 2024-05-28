"use client";

import React from 'react';
import { Box } from '@mui/material';
import PainelInvestment from '@/app/components/painel/show_status_stocks';
import StockChart from '@/app/components/graphics/stock';
import JustStockList from '@/app/components/list/just_stockList';
import StockvsIndice from '@/app/components/graphics/stockvsIndice';

const Investimento = () => {
  return (
    <Box
      width='80%'
      marginTop= '7rem'
      >
        <PainelInvestment />
        <JustStockList />
        
        <StockvsIndice/>

    </Box>
  )
};

export default Investimento;
