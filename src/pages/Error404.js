import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
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
const Error404 = ({}) => {
    const handleShowHeader = useContext(HandleSHowHeader);
    const showHeader = useContext(showHeaderContext);
    const styleClass = useMainStyles();
    useEffect(()=>{
        
        showHeader && handleShowHeader();
        return() => {
            !showHeader && handleShowHeader();
        };
    });
    
    return (
        <div className={styleClass.content}>
            
            <img src="https://sb-admin-angular.startbootstrap.com/assets/img/error-404-monochrome.svg" height="320px" />
            <p>This requested URL was not found on this server.</p>
            <div style={{marginTop:'5px'}}><Link to="/" onClick={handleShowHeader}><ArrowBackIcon className={styleClass.linkColor}/><p className={styleClass.linkColor} style={{display:'inline',verticalAlign:'super'}}>return to dashboard</p></Link></div>
        </div>
    );
};

export default Error404;