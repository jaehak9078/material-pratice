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
        height: '460px',
        backgroundColor: 'white',
        borderRadius: '5px 5px 5px 5px',
        display:'flex',
        flexDirection: 'column',
        marginBottom: '20vh'
        
    },
    loginBoxHeader : {
        height: '80px',
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
        margin: '20px 0px 7px 0px',
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
    },
    loginFooter : {
        height: '60px',
        backgroundColor: '#eeeeee',
        borderRadius: '0px 0px 5px 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '20px',
        borderTop: '1px solid #c8c8c8'
    }
}));

const Login = () => {
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
                <Box className={styleClass.loginBoxHeader}><Typography variant="h4">Login</Typography></Box>
                <p className={styleClass.title}>Email</p>
                <InputBase className={styleClass.inputBox}  placeholder="Enter email address"></InputBase>
                <p className={styleClass.title}>Password</p>
                <InputBase className={styleClass.inputBox}  placeholder="Enter password"></InputBase>
                <Box className={styleClass.title}><Checkbox color="primary"/>Remember password</Box>
                <Box className={styleClass.loginBottom}><Link to="/forgot" style={{color:'#00a4fc',marginRight:'80px'}}>Forgot Password?</Link><Link to="/"><Button variant="contained" color="primary">Login</Button></Link></Box>
                <Box className={styleClass.loginFooter}><Link to="/register" style={{color:'#00a4fc'}}>Need an account? Sign up!</Link></Box>
            </Box>
        </div>
    );
};

export default Login;