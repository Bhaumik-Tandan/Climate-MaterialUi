import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Image from 'next/image';
import Group from "../assets/Group.png";
import Search from "../assets/Search.png";

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0} 
    sx={{ backgroundColor: '#ffffff' }}
    >
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between', py: 2 }}> 
      <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 3 }}> 
            <Image src={Group} alt="Climate Angels" width="48.45" height="48"
            style={{ paddingRight: '10px' }}
             />
          <Typography variant="h6" color="#4C4C4C" noWrap>
            Climate Angels
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center',  width: '300px',
    padding: '5px',
    border: '1px solid #C0C0C0',
    borderRadius: '8px',
     }}> 
      <Image
        alt="search"
        src={Search}
        width="20"
        height="20"
      />
      <InputBase
        sx={{ ml: 1, flex: 1, width: 300 }}  
        placeholder="Search by company name..."
      />
    </Box>
          
    </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 1 }}> {/* Added horizontal padding here */}
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
