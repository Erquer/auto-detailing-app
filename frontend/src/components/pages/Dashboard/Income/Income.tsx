import React from 'react';
import { IncomeChart } from './IncomeChart';

const Income = () => (
  <div>
    <span style={{ display: 'inline-flex' }}>
      <h2>Przychody</h2>
      {/* <Button innerText="SPRAWDŹ CAŁĄ HISTORIE" to="/orders" /> */}
    </span>
    <IncomeChart height={350} />
  </div>
);

export default Income;
