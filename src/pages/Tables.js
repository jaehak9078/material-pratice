
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { Box, Divider, InputBase, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TableChart } from '@material-ui/icons';
import DataTable from '../components/DataTable';

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
  linkBox: {
    width: '90%',
    backgroundColor: '#e9ecef',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px',
    color: '#6c757d',
},
    loginBoxHeader : {
        height: '50px',
        backgroundColor: '#eeeeee',
        borderRadius: '5px 5px 0px 0px',
        display: 'flex',
        paddingLeft: '20px',
        alignItems:'center',
        borderBottom: '1px solid #c8c8c8'
},
    descriptionBox: {
        width: '90%',
        height: '60px',
        alignItems: 'center',
        paddingLeft: '15px',
        display: 'flex',
        borderRadius: '5px',
        border: '1px solid #c8c8c8',
        margin: '20px 0px 20px 0px'
        
},
inputBox : {
    border: '1px solid gray',
    width: '10%',
    alignSelf: 'center',
    height: '36px',
    borderRadius: '5px 5px 5px 5px',
    paddingLeft: '8px',
    marginLeft:'10px',

},
  }));   
const Tables = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content, {
            [styleClass.contentShift]: open,
        })}>
            <h1>Tables</h1>
            <Box className={styleClass.linkBox}><Link style={{color:"#007bfc"}} to="dashboard">Dashboard</Link> &nbsp;/ Tables</Box>
            <Box className={styleClass.descriptionBox}>The table below is adapted from ng-bootsrap. For more information, please visit the ng-bootstrap table documentation.</Box>
            <Box style={{width:'91%', margin:'40px 0px 40px 0px', border:'1px solid #dfdfdf'}}>
                <Box className={styleClass.loginBoxHeader}><TableChart style={{marginRight:'5px'}}/>DataTable Example</Box>
                <Box style={{width:'97%',marginLeft:'auto',marginRight:'auto',marginBottom:'20px'}}>
                <Box style={{display:'flex'}}><p>Full text search:</p><InputBase className={styleClass.inputBox}></InputBase></Box>
                <Divider/>
                
                <DataTable/>
                </Box>
            </Box>
        </div>
    );
};

export default Tables;