import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '../../../Button/Button';
import { StyledOrders } from './Orders.styled';
import { StyledHeading } from '../Calendar/Calendar.styled';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxHeight: '50px',
    overflow: 'auto',
  },
});

const ordersData = [
  {
    carModel: 'Peugeot 208',
    registrationNumber: 'PO 2137',
    nameOfService: 'Mycie one-step',
    price: '59',
  },
  {
    carModel: 'Porsche 911 Turbo S',
    registrationNumber: 'WW 577A83',
    nameOfService: 'Mycie wieloetapowe',
    price: '129',
  },
  {
    carModel: 'Audi A6',
    registrationNumber: 'PZ B202HZ',
    nameOfService: 'Sprzątanie wnętrza pojazdu',
    price: '49',
  },
];

const Orders = () => {
  const classes = useStyles();

  return (
    <StyledOrders>
      <StyledHeading>Historia</StyledHeading>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Samochód</TableCell>
                <TableCell>Numer rejestracyjny</TableCell>
                <TableCell>Usługa</TableCell>
                <TableCell>Cena</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow>
                  <TableCell>{order.carModel}</TableCell>
                  <TableCell>{order.registrationNumber}</TableCell>
                  <TableCell>{order.nameOfService}</TableCell>
                  <TableCell>{order.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Button innerText="ZOBACZ HISTORIE" to="/orders" />
      </div>
    </StyledOrders>
  );
};

export default Orders;
