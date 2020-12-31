
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useMainStyles = makeStyles((theme)=>({
    footer : {
      height:'50px',
      marginTop:'41.2%',
      backgroundColor: '#f8f9fa',
      paddingLeft:'25px'
  },
  footerShift: {
      
      width: `calc(100%-240px)`,
      marginLeft: '240px',
      backgroundColor: '#f8f9fa',
      transition: theme.transitions.create(['margin','width'], {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
              }),
  },
  paddingDiv: {                       
    flex : 1,
},
  }));

const Footer = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <>
        
        <div className={clsx(styleClass.footer, {
            [styleClass.footerShift]: open,
        })}>
            
            <p>Copyright © Your Website 2020</p>

        </div>
        </>
    );
};

export default Footer;