import React, { Component } from 'react';
import Banner from './Banner.jsx';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    marginLeft: 100,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    backgroundColor: '#7dce94',
  },
};

const Nav = props => (
  <div id="nav" style={styles.root}>
    <AppBar position="static" style={styles.appbar}>
      <Toolbar variant="dense">
        <Typography variant="headline" color="inherit" id="banner" style={styles.flex}>
          <Banner />
        </Typography>
        {props.isLoggedIn ? (
          <div>
            <Button color="inherit" id="Create" onClick={() => props.displayCreateJob('create')}>
              Add
            </Button>
            <Button
              color="inherit"
              id="logout"
              onClick={() => {
                props.updateStatus(false);
                props.updateUserInfo(null, null, null, null, null);
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button color="inherit" id="login" onClick={() => props.displayLoginSignup('login')}>
              Login
            </Button>
            <Button color="inherit" id="register" onClick={() => props.displayLoginSignup('register')}>
              Register
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

export default Nav;
