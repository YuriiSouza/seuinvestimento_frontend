"use client";

import React from 'react';
import CarteiraGraphic from '@/app/components/graphics/carteira';
import { Box } from '@mui/material';
import Add_stock from '@/app/components/button/add_stocks';
import ListCapital from '@/app/components/list/capital_gain';
import StockList from '@/app/components/list/stockList';
import JustStockList from '@/app/components/list/just_stockList';

const Patrimonio = () => {
  return (
      <><Box
      width='100%'
      marginTop='6rem'
      marginRight='1rem'
      marginLeft='1rem'
    >
      <Add_stock />
      <CarteiraGraphic />
      <Box
        display='flex'
        >
        <ListCapital />
        <StockList />
      </Box>
    </Box>
      </>
  )
};

export default Patrimonio;
