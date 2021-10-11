import React from 'react';
// import LinkButton from '../../../common/LinkButton/LinkButton';
import { IncomeChart } from './IncomeChart';

const Income = () => (
  <div>
    <span style={{ display: 'inline-flex' }}>
      <h2>Przychody</h2>
      {/* <LinkButton innerText="SPRAWDŹ CAŁĄ HISTORIE" to="/orders" /> */}
    </span>
    <IncomeChart height={350} />
  </div>
);

export default Income;
