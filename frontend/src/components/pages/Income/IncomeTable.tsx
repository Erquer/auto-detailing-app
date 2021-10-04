import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { Order, Service } from '../../../services/OrderService';

export interface IncomeTableProps {
    ordersFromDay: Order[];
}

export const IncomeTable = ({ ordersFromDay }: IncomeTableProps) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('IncomeTable:', ordersFromDay);
  }, [ordersFromDay]);

  const table = (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Services</TableCell>
            <TableCell>Prize</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { ordersFromDay.length > 0 ? ordersFromDay.map((order) => (
            <TableRow>
              <TableCell>{order.client.firstName}</TableCell>
              <TableCell>{order.car.registration }</TableCell>
              <TableCell>{order.service.map((service: Service) => service.serviceName).join(',')}</TableCell>
              <TableCell>
                {order.service.reduce((b:number, service: Service) => (
                  b + (service.servicePrize - service.serviceCost)))}
              </TableCell>
            </TableRow>
          )) : <TableRow> No Data </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      {table}
    </div>
  );
};
