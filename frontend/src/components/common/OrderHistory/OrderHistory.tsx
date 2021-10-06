import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { Order, OrderService } from '../../../services/OrderService';
import { countIncome } from '../../pages/Income/IncomeTable';
import { StyledTableCell } from '../../pages/Income/Income.styled';

export const OrderHistory: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await OrderService.getOrders();
      setOrders(data);
      setLoading(false);
    })();
  }, []);

  // eslint-disable-next-line no-console
  console.log(orders);

  const table = (
    <TableContainer component={Paper} style={{ maxHeight: '600px' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#2851A3' }}>
            <StyledTableCell>Client name</StyledTableCell>
            <StyledTableCell>Car registration</StyledTableCell>
            <StyledTableCell>Services</StyledTableCell>
            <StyledTableCell>Order Date </StyledTableCell>
            <StyledTableCell>Deadline </StyledTableCell>
            <StyledTableCell>Finish Date </StyledTableCell>
            <StyledTableCell>Summary Income</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow>
              <TableCell size="small" height="100%">{order.client.firstName || 'Anonymous'}</TableCell>
              <TableCell>{order.car.registration || 'Anonymous'}</TableCell>
              <TableCell>{order.service.map((ser) => ser.serviceName).join(',') || 'undefined'}</TableCell>
              <TableCell>{order.orderDate || 'undefined'}</TableCell>
              <TableCell>{order.deadline || 'undefined'}</TableCell>
              <TableCell>{order.finishDate || 'unfinished'}</TableCell>
              <TableCell>{order.service.length > 0 ? countIncome(order) : 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <h1>Historia zamówień</h1>
      {loading ? 'Loading....' : table}
    </div>
  );
};
