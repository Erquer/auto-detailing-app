// disable-eslint
import React from 'react';
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
export const countIncome = (order: Order): number => {
  const result = order.service.map((service) => ({ serviceCost: service.serviceCost,
    servicePrize: service.servicePrize,
    serviceDuration: service.serviceDurationTime,
  }))
  // eslint-disable-next-line max-len
    .reduce((acc: {serviceDuration: number, serviceCost: number, servicePrize: number},
      item: {serviceDuration:number, serviceCost: number, servicePrize: number}) => {
      acc.serviceDuration += item.serviceDuration;
      acc.serviceCost += item.serviceCost;
      acc.servicePrize += item.servicePrize;
      return acc;
    });
    // eslint-disable-next-line max-len
  return result.servicePrize - result.serviceCost - result.serviceDuration * (order.worker.salary / 8);
};
export const IncomeTable = ({ ordersFromDay }: IncomeTableProps) => {
  const table = (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Services</TableCell>
            <TableCell>Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { ordersFromDay.length > 0 ? ordersFromDay.map((order) => (
            <TableRow>
              <TableCell>{order.client.firstName}</TableCell>
              <TableCell>{order.car.registration }</TableCell>
              <TableCell>{order.service.map((service: Service) => service.serviceName).join(',')}</TableCell>
              <TableCell>
                {countIncome(order)}
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
