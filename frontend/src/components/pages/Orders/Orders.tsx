import React, { useEffect, useState } from 'react';
import { IncomeChart } from '../Dashboard/Income/IncomeChart';
import { OrdersStyled } from './Orders.styled';
import { Order, OrderService } from '../../../services/OrderService';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>();

  const getOrderByDate = (date: string) => {
    const dateToSent = new Date(date);
    // eslint-disable-next-line no-console
    console.log(
      date,
      dateToSent.toLocaleDateString(),
      dateToSent.toLocaleTimeString(),
    );
    (async () => {
      const { data } = await OrderService.getOrdersByFinishDate(
        dateToSent.toDateString(),
      );
      setOrders(data);
    })();
  };

  // eslint-disable-next-line no-console
  useEffect(() => console.log(orders), [orders]);
  return (
    <OrdersStyled>
      <div>
        <h1>Orders</h1>
        <IncomeChart height={600} getOrdersByDate={getOrderByDate} />
      </div>
    </OrdersStyled>
  );
};

export default Orders;
