import React, { useContext, useEffect } from 'react';
import { Box, Button, Checkbox, Input, InputBase, makeStyles, Typography } from '@material-ui/core';
import { HandleSHowHeader, showHeaderContext } from '../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({

    content: {
        width: '100%',
        backgroundColor: '#007bff',
        height:'95.9vh',
        display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '40px',
    },
    loginBox : {
        width: '25%',
        height: '44.8vh',
        backgroundColor: 'white',
        borderRadius: '5px 5px 5px 5px',
        display:'flex',
        flexDirection: 'column',
        marginBottom: '20vh'
        
    },
    loginBoxHeader : {
        height: '15vh',
        backgroundColor: '#eeeeee',
        borderRadius: '5px 5px 0px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderBottom: '1px solid #c8c8c8'
    },
    title : {
        marginLeft: '25px',
        fontSize: '16px',
        fontFamily: 'monospace, "times New Roman", serif',
        margin: '15px 0px 7px 0px',
    },
    inputBox : {
        border: '1px solid gray',
        width: '90%',
        alignSelf: 'center',
        height: '56px',
        borderRadius: '5px 5px 5px 5px',
        paddingLeft: '8px',

    },
    loginBottom : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        verticalAlign: 'middle',
        marginTop: '20px',
    },
    loginFooter : {
        height: '5vh',
        backgroundColor: '#eeeeee',
        borderRadius: '0px 0px 5px 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '20px',
        borderTop: '1px solid #c8c8c8'
    },
    descrptionP : {
        fontSize: '14px',
        color: 'gray',
        marginLeft: '25px',
    },
}));

const ForgotPassword = () => {
    const styleClass = useStyles();
    const handleShowHeader = useContext(HandleSHowHeader);
    const showHeader = useContext(showHeaderContext);
    useEffect(()=>{
        
        showHeader && handleShowHeader();
        return() => {
            !showHeader && handleShowHeader();
        };
    });
    return (
        <div className={styleClass.content}>
            <Box className={styleClass.loginBox}>
                <Box className={styleClass.loginBoxHeader}><Typography variant="h4">Password Recovery</Typography></Box>
                <p className={styleClass.descrptionP}>Enter your email address and we will send you a link to reset your password.</p>
                <p className={styleClass.title}>Email</p>
                <InputBase className={styleClass.inputBox}  placeholder="Enter email address"></InputBase>
                <Box className={styleClass.loginBottom}><Link to="/login" style={{color:'#00a4fc'}}>Return to Login</Link><Link to="/"><Button variant="contained" color="primary">Reset Password</Button></Link></Box>
                <Box className={styleClass.loginFooter}><Link to="/register" style={{color:'#00a4fc'}}>Need an account? Sign up!</Link></Box>
            </Box>
        </div>
    );
};

export default ForgotPassword;