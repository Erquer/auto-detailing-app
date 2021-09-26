import React from 'react';
import { IncomeChart } from '../Dashboard/Income/IncomeChart';
import { OrdersStyled } from './Orders.styled';

const Orders = () => (
  <OrdersStyled>
    <div>
      <h1>Orders</h1>
      <p>Here you can find orders</p>
      <IncomeChart height={600} />
    </div>
  </OrdersStyled>
);

export default Orders;
