import React, { useState } from "react";
import { AppBar, Toolbar, styled, Typography, InputBase, Avatar, Box, Menu } from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 ,10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
 display: "none",
 alignItems: "center",
  gap:'20px',
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
   gap:'10px',
   [theme.breakpoints.up("sm")]:{
    display: "none",
  }
 }));
function Navbar() {
  const [open , setOpen]=useState(false)
  return (
    <AppBar
      sx={{
        position: "sticky",
      }}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          ABRAR DEV
        </Typography>
        <LogoDevIcon
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white" />
          </Badge>
          <Avatar sx={{width:30,height:30}} alt="Abrar Aboobacker" src="https://instagram.fmaa1-4.fna.fbcdn.net/v/t51.2885-19/323188187_905231780634801_1054160749904252404_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fmaa1-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=b7kd_5Hu1YcAX-EUvpx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBX7xstXMpu4mcGxKqcyGVdh2G2E6-Gpgsat1LvCR_JtQ&oe=64192332&_nc_sid=8fd12b" onClick={e=>setOpen(true)} /> 
        </Icons>
        <UserBox  onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30,height:30}} alt="Abrar Aboobacker" src="https://instagram.fmaa1-4.fna.fbcdn.net/v/t51.2885-19/323188187_905231780634801_1054160749904252404_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fmaa1-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=b7kd_5Hu1YcAX-EUvpx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBX7xstXMpu4mcGxKqcyGVdh2G2E6-Gpgsat1LvCR_JtQ&oe=64192332&_nc_sid=8fd12b" /> 
        <Typography variant="span">Abrar Aboobacker</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
