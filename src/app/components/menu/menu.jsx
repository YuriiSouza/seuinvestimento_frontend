'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';import Stack from '@mui/material/Stack';

export default function MenuComponent() {
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   } else if (event.key === 'Escape') {
  //     setOpen(false);
  //   }
  // }

  // // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  return (
    <Stack 
      direction="row" 
      spacing={2}
      >
      <Paper
        sx={{ 
          backgroundColor: '#162c63',
          color: '#f2f4f5',
          borderRadius: '0px',
          width: '20rem',
          height: '100vw'
          }}
        >
        <MenuList>
          <MenuItem>
            <MonetizationOnIcon />
            <p>Investimentos</p>
          </MenuItem>

          <MenuItem>
            <CandlestickChartIcon />
            <p>Logout</p>
          </MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}