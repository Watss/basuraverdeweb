import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, makeStyles} from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';

const useStyles = makeStyles ( theme => ({
    offset: theme.mixins.toolbar
}));


function NavBar(props){

    const { onSidebarOpen } = props ;

    const classes = useStyles();
    return (
      <div>
        <AppBar position="fixed" color="primary">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onSidebarOpen}>
            <MenuIcon />
        </IconButton>
            
        <Typography variant="h6" color="inherit">
            Basura Verde Map Web
        </Typography>

        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      </div>
      
    );
}  

export default NavBar