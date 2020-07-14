import React ,{ useEffect } from 'react';
import { Drawer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawer: {
      width: 240,
      [theme.breakpoints.up('lg')]: {
        marginTop: 64,
        height: 'calc(100% - 64px)'
      }
    }
}) );

export default function SideBar(props) {
    const { openSidebar, onClose } = props;
    const classes = useStyles();

    useEffect( () => {
        console.log(openSidebar);
    });

    return (
        <div>
            <Drawer
              onClose={onClose}
              variant="temporary"
              anchor="left"
              classes={{ paper: classes.drawer }}
              open={openSidebar}
            >
            
            </Drawer>
        </div>
    );

}