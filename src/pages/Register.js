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
        width: '40%',
        height: '60vh',
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
        marginLeft: '5px',
        fontSize: '16px',
        fontFamily: 'monospace, "times New Roman", serif',
        margin: '20px 0px 7px 0px',
    },
    inputBox : {
        border: '1px solid gray',
        width: '320px',
        alignSelf: 'center',
        height: '56px',
        borderRadius: '5px 5px 5px 5px',
        paddingLeft: '8px',
        margin: '0px 5px 0px 5px'

    },
    inputBox2 :{
        border: '1px solid gray',
        width: '650px',
        alignSelf: 'center',
        height: '56px',
        borderRadius: '5px 5px 5px 5px',
        paddingLeft: '8px',
        margin: '0px 5px 0px 5px'
    },
    loginBottom : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '40px',
      

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
    rowLiner : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
}));

const Register = () => {
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
                <Box className={styleClass.loginBoxHeader}><Typography variant="h4">Create Account</Typography></Box>
                <Box className={styleClass.rowLiner}>
                    <Box>
                        <p className={styleClass.title}>First Name</p>
                        <InputBase className={styleClass.inputBox}  placeholder="Enter first name"></InputBase>
                    </Box>
                    <Box>
                        <p className={styleClass.title}>Last Name</p>
                        <InputBase className={styleClass.inputBox}  placeholder="Enter last name"></InputBase>
                    </Box>
                </Box>
                <Box className={styleClass.rowLiner}>
                    <Box>
                        <p className={styleClass.title}>Email</p>
                        <InputBase className={styleClass.inputBox2}  placeholder="Enter email address"></InputBase>
                    </Box>
                </Box>
                <Box className={styleClass.rowLiner}>
                    <Box>
                        <p className={styleClass.title}>password</p>
                        <InputBase className={styleClass.inputBox}  placeholder="Enter password"></InputBase>
                    </Box>
                    <Box>
                        <p className={styleClass.title}>Confirm Password</p>
                        <InputBase className={styleClass.inputBox}  placeholder="Confirm Password"></InputBase>
                    </Box>
                </Box>
                
                
                <Box className={styleClass.loginBottom}><Link to="/"><Button variant="contained" color="primary" style={{width:'650px'}}>Create Account</Button></Link></Box>
                <Box className={styleClass.loginFooter}><Link to="/login" style={{color:'#00a4fc'}}>Have an account? Go to login</Link></Box>
            </Box>
        </div>
    );
};

export default Register;