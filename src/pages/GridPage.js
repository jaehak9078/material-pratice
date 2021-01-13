import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import Grid from '../components/Grid';
import clsx from 'clsx';
import { OpenContext} from '../App';

const useMainStyles = makeStyles((theme)=>({
    content : {
        flexGrow: 1,
        paddingLeft:'25px',
        height: '90vh',
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

const GridPage = () => {

    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content,{
            [styleClass.contentShift]: open,
        })}>
            <Grid/>
        </div>
    );
};

export default GridPage;