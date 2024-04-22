import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" color="inherit" noWrap>
            Climate Angels
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', ml: 1, flex: 1 }}>
          <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', pl: 2 }}>
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search by company name..."
            sx={{
              color: 'inherit',
              pl: `calc(1em + 32px)`,
              width: '100%',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <LockOutlinedIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ mr: 2 }}>
            Shailesh Vickram
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
