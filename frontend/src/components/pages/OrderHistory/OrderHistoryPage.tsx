import React from 'react';
import { OrderHistory } from '../../common/OrderHistory/OrderHistory';
import { OrdersStyled } from '../Orders/Orders.styled';

const OrderHistoryPage = () => (
  <OrdersStyled>
    <OrderHistory />
  </OrdersStyled>
);

export default OrderHistoryPage;
