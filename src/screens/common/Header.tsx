import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DrawerMenu from './DrawerMenu';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  const [state, setState] = React.useState({
    left: false
  });
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const authToken = localStorage.getItem("auth");
    if (authToken) {
      localStorage.removeItem("auth");
      navigate('/');
    } else {
      navigate('/');
    }
  }

  const handleProfile = () => {
    navigate('/profile');
  }

  const toggleDrawer = (anchor: any, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    // if (
    //   event.type === 'keydown' &&
    //   ((event as React.KeyboardEvent).key === 'Tab' ||
    //     (event as React.KeyboardEvent).key === 'Shift')
    // ) {
    //   return;
    // }

    // setState({ ...state, [anchor]: open });
  };

  // const importDrawer = (anchor:any) =>{
  //   return (
  //     <DrawerMenu anchor={anchor} />
  //   )
  // }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)} 
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Docs   
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)} 
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add   
          </Typography> <AddIcon />
          </IconButton>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    {/* <Drawer
      anchor='left'
      open={state['left']}
      onClose={toggleDrawer('left', false)}
    > 
      <DrawerMenu anchor="left" onClick={()=>toggleDrawer('left', true)} />
    </Drawer> */}
    </>
  )
}

export default Header;