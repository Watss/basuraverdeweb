import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import ContenidoPrincipal from './components/ContenidoPrincipal.jsx';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b5e20',
      contrastText : '#fff'
    },
    secondary: {
      main: '#66bb6a',
      contrastText : '#fff'
    },
  },
});

function App() {
  

  const [openSidebar, setOpenSidebar] = useState(true);

  const handleSideBarOpen = () => {
    setOpenSidebar(true);
  }

  const handleSideBarClose = () => {
    setOpenSidebar(false);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar onSidebarOpen={ handleSideBarOpen }>
        </NavBar>
        <SideBar onClose={handleSideBarClose} openSidebar={openSidebar}/>
        <ContenidoPrincipal></ContenidoPrincipal>
      </ThemeProvider>
    </div>
  );
}

export default App;
