
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { Box, makeStyles, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BarChart, ShowChart } from '@material-ui/icons';
import AreaChart from '../components/AreaChart';
import BarCharts from '../components/BarCharts';
import PieChart from '../components/PieChart';
import PieChartIcon from '@material-ui/icons/PieChart';

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
  }));   
const Charts = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content, {
            [styleClass.contentShift]: open,
        })}>
            <h1>Charts</h1>
            <Box className={styleClass.linkBox}><Link style={{color:"#007bfc"}} to="dashboard">Dashboard</Link> &nbsp;/ Charts</Box>
            <Box className={styleClass.descriptionBox}>Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official Chart.js documentation.</Box>
            <Paper style={{width:'91%'}}>
                <Box className={styleClass.loginBoxHeader}><ShowChart/>Area Chart Example</Box>
                <AreaChart/>
            </Paper>
            <Box style={{width:'100%',display:'flex',marginTop:'40px'}}>
            <Paper style={{width:'45%'}}>
                <Box className={styleClass.loginBoxHeader}><BarChart/>Bar Chart Example</Box>
                <BarCharts/>
            </Paper>
            <Paper style={{width:'45%', marginLeft:'20px'}}>
            <Box className={styleClass.loginBoxHeader}><PieChartIcon style={{marginRight:'5px'}}/>Pie Chart Example</Box>
            <PieChart/>
            </Paper>
            </Box>
            <Box style={{height:'40px'}}></Box>
        </div>
    );
};



export default Charts;