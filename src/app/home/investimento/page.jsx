"use client";

import React from 'react';
import { Box } from '@mui/material';
import PainelInvestment from '@/app/components/painel/show_status_stocks';
import JustStockList from '@/app/components/list/just_stockList';
import StockvsIndice from '@/app/components/graphics/stockvsIndice';

const Investimento = () => {
  return (
    <>
    <Box
    width='100%'
    marginTop='6rem'
    marginRight='1rem'
    marginLeft='1rem'
      >
        <PainelInvestment />
        <JustStockList />
        
        <StockvsIndice/>

    </Box>
    </>
  )
};

export default Investimento;
