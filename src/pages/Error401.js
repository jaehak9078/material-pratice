import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HandleSHowHeader, showHeaderContext } from '../App';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useMainStyles = makeStyles((theme)=>({
    content : {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '40px',
      
      

  },
  linkColor : {
      color: '#52beff',
  }
  

  }));   
const Error401 = () => {
    const handleShowHeader = useContext(HandleSHowHeader);
    const showHeader = useContext(showHeaderContext);
    const styleClass = useMainStyles();
    useEffect(()=>{
        showHeader && handleShowHeader();
        return() => {
            !showHeader && handleShowHeader();
        };
    },);
    
    return (
        <div className={styleClass.content}>
            <Typography variant="h1">401</Typography>
            <Typography variant="h6">Unauthorized</Typography>
            <p>Access to this resource is denied.</p>
            <div style={{marginTop:'5px'}}><Link to="/" onClick={handleShowHeader}><ArrowBackIcon className={styleClass.linkColor}/><p className={styleClass.linkColor} style={{display:'inline',verticalAlign:'super'}}>return to dashboard</p></Link></div>
        </div>
    );
};

export default Error401;