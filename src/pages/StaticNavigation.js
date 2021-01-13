
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { Box, Card, CardActionArea, Divider, makeStyles, Typography, Paper, InputBase, Container } from '@material-ui/core';
import {ChevronRight,BarChart,ShowChart,TableChart} from '@material-ui/icons';
import AreaChart from '../components/AreaChart';
import BarCharts from '../components/BarCharts';
import DataTable from '../components/DataTable';
import { Link } from 'react-router-dom';
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
  card : {
      marginTop: '20px',
      width: 340,
      height: 120,
      backgroundColor: '#007bff',
      color: 'white',
      display: 'flex',
      
      flexDirection: 'column'
  },
  cardBox : {
      borderBottom:'1px solid #0068d8',
      height:'80px',
      display:'flex',
      alignItems:'center',
      
  },
  cardsBox : {
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: '9%',
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
const StaticNavigation = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content, {
            [styleClass.contentShift]: open,
        })}>
            <h1>Dashboard Static</h1>
            <Box className={styleClass.linkBox}><Link style={{color:"#007bfc"}} to="dashboard">Dashboard</Link> &nbsp;/ Static</Box>
            <Box className={styleClass.cardsBox}>
                <Card className={styleClass.card}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox}><Typography variant="h5" style={{paddingLeft:'20px'}}>Primary Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details<ChevronRight style={{marginLeft:'60%',verticalAlign:'middle'}}/></Typography>
                    </CardActionArea>
                </Card>
                <Card className={styleClass.card} style={{backgroundColor:"#ffc107"}}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox} style={{borderBottom:"1px solid #d9a946"}}><Typography variant="h5" style={{paddingLeft:'20px'}}>Warning Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details<ChevronRight style={{marginLeft:'60%',verticalAlign:'middle'}}/></Typography>
                    </CardActionArea>
                </Card>
                <Card className={styleClass.card} style={{backgroundColor:"#28a745"}}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox} style={{borderBottom:"1px solid #228d3a"}}><Typography variant="h5" style={{paddingLeft:'20px'}}>Success Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details<ChevronRight style={{marginLeft:'60%',verticalAlign:'middle'}}/></Typography>
                    </CardActionArea>
                </Card>
                <Card className={styleClass.card} style={{backgroundColor:"#dc3545"}}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox} style={{borderBottom:"1px solid #b93343"}}><Typography variant="h5" style={{paddingLeft:'20px'}}>Danger Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details<ChevronRight style={{marginLeft:'60%',verticalAlign:'middle'}}/></Typography>
                    </CardActionArea>
                </Card>
            </Box>
            <Box style={{width:'100%',display:'flex',marginTop:'40px'}}>
            <Paper style={{width:'45%'}}>
                <Box className={styleClass.loginBoxHeader}><ShowChart/>Area Chart Example</Box>
                <AreaChart/>
            </Paper>
            <Paper style={{width:'45%', marginLeft:'20px'}}>
                <Box className={styleClass.loginBoxHeader}><BarChart/>Bar Chart Example</Box>
                <BarCharts/>
            </Paper>
            </Box>
            <Box style={{width:'91%', margin:'40px 0px 40px 0px', border:'1px solid #dfdfdf'}}>
                <Box className={styleClass.loginBoxHeader}><TableChart style={{marginRight:'5px'}}/>DataTable Example</Box>
                <Box style={{width:'97%',marginLeft:'auto',marginRight:'auto',marginBottom:'20px'}}>
                <Box style={{display:'flex'}}><p>Full text search:</p><InputBase className={styleClass.inputBox}></InputBase></Box>
                <Divider/>
                
                <DataTable/>
                </Box>
            </Box>
            <Paper>
            <Box className={styleClass.loginBoxHeader}><PieChartIcon style={{marginRight:'5px'}}/>Pie Chart Example</Box>
            <PieChart/>
            </Paper>
            <Box style={{height:'40px'}}></Box>
           
        </div>
    );
};

export default StaticNavigation;