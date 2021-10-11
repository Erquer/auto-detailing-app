import React, { useState } from 'react';
import { IncomeChart } from '../Dashboard/Income/IncomeChart';
import { IncomeStyled } from './Income.styled';
import { Order, OrderService } from '../../../services/OrderService';
import { IncomeTable } from './IncomeTable';

const Income = () => {
  const [orders, setOrders] = useState<Order[]>();

  const getOrderByDate = (date: string) => {
    const dateToSent = new Date(date);
    (async () => {
      const { data } = await OrderService.getOrdersByFinishDate(
        dateToSent.toDateString(),
      );
      setOrders(data);
    })();
  };

  return (
    <IncomeStyled>
      <div>
        <h1>Orders</h1>
        <IncomeChart height={600} getOrdersByDate={getOrderByDate} />
        {orders && <IncomeTable ordersFromDay={orders} />}
      </div>
    </IncomeStyled>
  );
};

export default Income;
