import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import "./App.css";

function App() {
  return (
    <div className="x-app">
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
          <IconButton
            aria-label="Account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            edge="end"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
