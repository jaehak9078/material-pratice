import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(number, country, area, population) {
      return {number,country,area,population}
  }


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



const DataTable = () => {
    const styleClass = useStyles();

    // const [rows,setRows] = useState([]);

    const [tables,setTables] = useState([]);

    useEffect(()=>{
        console.log('hi');
        axios.get('/api/table')
        .then((res)=>{
            console.log(res);
            setTables(res.data);
        })
        .catch((err)=>{
            console.log(err);
            console.log("실패..");
        }).then(()=>{
            console.log('tables: ',tables);
        })
       
        console.log('bye');
    },[tables])
   
    return (
        
            <TableContainer component={Paper}>
                <Table className={styleClass.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="right">Country</StyledTableCell>
                            <StyledTableCell align="right">Area</StyledTableCell>
                            <StyledTableCell align="right">Population</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tables.map((table) => (
                            <StyledTableRow key={tables.number}>
                                <StyledTableCell component="th" scope="row">
                                    {table.tno}
                                </StyledTableCell>
                                <StyledTableCell align="right">{table.country}</StyledTableCell>
                                <StyledTableCell align="right">{table.area}</StyledTableCell>
                                <StyledTableCell align="right">{table.population}</StyledTableCell>
                            </StyledTableRow>
                            ))}  
                    </TableBody>
                </Table>
            </TableContainer>
        
    );
};

export default DataTable;