"use client";

import React from 'react';
import CarteiraGraphic from '@/app/components/graphics/carteira';
import { Box } from '@mui/material';

const Patrimonio = () => {
  return (
    <Box
      width='100%'
      marginTop= '10rem'
      marginRight='1rem'
      marginLeft='1rem'
      >
        <CarteiraGraphic />
    </Box>
  )
};

export default Patrimonio;
