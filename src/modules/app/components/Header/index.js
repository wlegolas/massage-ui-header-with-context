import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { UserInfo } from '..';

const Header = () => (
  <AppBar position="static" className="x-header">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="h1"
        className="x-header--title"
        noWrap
      >
        Schedule your massege
      </Typography>
      <UserInfo />
    </Toolbar>
  </AppBar>
)

export default Header
