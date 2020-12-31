
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useMainStyles = makeStyles((theme)=>({
    content : {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      paddingLeft:'25px'
  },
  contentShift: {
      width: `calc(100%-240px)`,
      marginLeft: '240px',
      transition: theme.transitions.create(['margin','width'], {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
              }),
  },
  }));   
const LightSidenav = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content, {
            [styleClass.contentShift]: open,
        })}>
            <h1>Light Sidenav</h1>
        </div>
    );
};

export default LightSidenav;