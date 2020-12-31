
import  {React, useContext } from 'react';
import { OpenContext} from '../App';
import clsx from 'clsx';
import { Box, Button, Card, CardActionArea, CardActions, Divider, makeStyles, Typography } from '@material-ui/core';

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
  }
  }));   
const Dashboard = () => {
    const open = useContext(OpenContext);
    const styleClass = useMainStyles();
    return (
        <div className={clsx(styleClass.content, {
            [styleClass.contentShift]: open,
        })}>
            <h1>Dashboard</h1>
            <Box className={styleClass.linkBox}>Dashboard</Box>
            <Box className={styleClass.cardsBox}>
                <Card className={styleClass.card}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox}><Typography variant="h5" style={{paddingLeft:'20px'}}>Primary Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details</Typography>
                    </CardActionArea>
                </Card>
                <Card className={styleClass.card} style={{backgroundColor:"#ffc107"}}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox} style={{borderBottom:"1px solid #d9a946"}}><Typography variant="h5" style={{paddingLeft:'20px'}}>Warning Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details</Typography>
                    </CardActionArea>
                </Card>
                <Card className={styleClass.card} style={{backgroundColor:"#28a745"}}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox} style={{borderBottom:"1px solid #228d3a"}}><Typography variant="h5" style={{paddingLeft:'20px'}}>Success Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details</Typography>
                    </CardActionArea>
                </Card>
                <Card className={styleClass.card} style={{backgroundColor:"#dc3545"}}>
                    <CardActionArea>
                        <Box className={styleClass.cardBox} style={{borderBottom:"1px solid #b93343"}}><Typography variant="h5" style={{paddingLeft:'20px'}}>Danger Card</Typography></Box>
                        <Typography style={{paddingLeft:'20px',fontSize:'16px',paddingTop:'6px'}}>View Details</Typography>
                    </CardActionArea>
                </Card>
            </Box>
        </div>
    );
};

export default Dashboard;