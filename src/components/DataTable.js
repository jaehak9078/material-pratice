import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


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

  const rows = [
      createData(1,'Russia','17,075,200','146,989,754'),
      createData(2,'France','640,679','64,979,548'),
      createData(3,'Germany','357,114','82,114,224'),
      createData(4,'Portugal','92,090','10,329,506'),
  ]
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



const DataTable = () => {
    const styleClass = useStyles();
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
                        {rows.map((row) => (
                            <StyledTableRow key={rows.number}>
                                <StyledTableCell component="th" scope="row">
                                    {row.number}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.country}</StyledTableCell>
                                <StyledTableCell align="right">{row.area}</StyledTableCell>
                                <StyledTableCell align="right">{row.population}</StyledTableCell>
                            </StyledTableRow>
                            ))}  
                    </TableBody>
                </Table>
            </TableContainer>
        
    );
};

export default DataTable;