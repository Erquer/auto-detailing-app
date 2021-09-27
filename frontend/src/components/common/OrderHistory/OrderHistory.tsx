import React, { useEffect, useState } from 'react';
import { Order, OrderService } from '../../../services/OrderService';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { useStyles } from '../../pages/Dashboard/Orders/Orders';

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

export const OrderHistory: React.FC<{}> = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const { data } = await OrderService.getOrders();
      setOrders(data);
    })();
  }, []);

  const table = (
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
  );

  return <div>Tutaj będzie cała historia</div>;
};
