import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import clsx from 'clsx';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import ContenidoPrincipal from './components/ContenidoPrincipal.jsx';
import Sidebar from './components/Sidebar/Sidebar.js';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009051',
      contrastText : '#fff'
    },
    secondary: {
      main: '#66bb6a',
      contrastText : '#fff'
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

function App() {
  
  const classes = useStyles();
  const [openSidebar, setOpenSidebar] = useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const handleSideBarOpen = () => {
    setOpenSidebar(true);
  }

  const handleSideBarClose = () => {
    setOpenSidebar(false);
  }


  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div  className={clsx({
      [classes.root]: true,
      [classes.shiftContent]: isDesktop
    })}>
      <ThemeProvider theme={theme}>
        <NavBar onSidebarOpen={ handleSideBarOpen }>
        </NavBar>
        <Sidebar onClose={handleSideBarClose} open={shouldOpenSidebar} variant={isDesktop ? 'persistent' : 'temporary' }></Sidebar>
    
        <ContenidoPrincipal></ContenidoPrincipal>
      </ThemeProvider>
    </div>
  );
}

export default App;
