
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useMainStyles = makeStyles((theme)=>({
    content : {
      flexGrow: 1,
      flex:1,
      backgroundColor: theme.palette.background.default,
      paddingLeft:'25px'
  },
  contentShift: {
      width: `calc(100%-240px)`,
      marginLeft: '240px',
      flex:1,
      transition: theme.transitions.create(['margin','width'], {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
              }),
  },
  }));   
const Authentication = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content, {
            [styleClass.contentShift]: open,
        })}>
            <h1>Authentication</h1>
        </div>
    );
};

export default Authentication;