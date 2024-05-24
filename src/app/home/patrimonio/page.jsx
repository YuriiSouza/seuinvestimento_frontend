"use client";

import React from 'react';
import CarteiraGraphic from '@/app/components/graphics/carteira';
import { Box } from '@mui/material';
import Add_stock from '@/app/components/button/add_stocks';

const Patrimonio = () => {
  return (
    <Box
      width='100%'
      marginTop= '10rem'
      marginRight='1rem'
      marginLeft='1rem'
      >
        <Add_stock />
        <CarteiraGraphic />
    </Box>
  )
};

export default Patrimonio;
