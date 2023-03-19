import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';
function Sidebar({mode, setMode}) {
  return (
    <Box sx={{
      flex:0.5,
      padding:1,
      display: {xs:"none",sm:"block"}
      }}>
        <Box sx={{
          position: "fixed",
        }}>

     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <NightlightIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light"?"dark":"light")} />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
    </Box>
  )
}

export default Sidebar
