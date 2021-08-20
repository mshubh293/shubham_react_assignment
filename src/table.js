import React from 'react'
import "./App.css";
import { TransData } from "./dataService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
} );

export const TableComponent = () => {
    return (
        <>
            <HomePageHeader />
            <div className="table-container">
            <BasicTable/>
          
            </div>
        </>
    );
};

function rewards(price) {
  if (price >100){
      return (2*(price-100) + 50);
  }
  else if (price >=50 && price < 100) {
    return price-50;
  }
  return 0;
}

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Reward Points Calculater</h2>
    </header>
  );
};

const BasicTable = () => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead className="table-head">
         <TableRow className="tabe-row">
            <TableCell >ID</TableCell>
            <TableCell align="center">Name</TableCell> 
            <TableCell align="center">Transaction Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TransData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.custid}>
              <TableCell component="th" scope="row">
                {row.custid}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.transactionDt}</TableCell>
              <TableCell align="center">{row.amt}</TableCell>
              <TableCell align="center">{rewards(row.amt)}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={TransData.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
