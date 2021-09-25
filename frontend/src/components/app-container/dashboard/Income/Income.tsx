import React from 'react';
import { Bar } from 'react-chartjs-2';

interface DataProps {
  date: string;
  income: number;
}

const Income = () => {
  const [data, setData] = React.useState<Array<DataProps>>([]);
  React.useEffect(() => {
    const rawData = require('./income.data.json');
    setData(rawData.incomes);
    console.log(rawData.incomes);
  }, []);

  const getData = () => {
    return {
      labels: data.map((d) => d.date),
      datasets: [
        {
          label: 'Incomes',
          data: data.map((d) => d.income),
          backgroundColor: 'blue',
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      ],
    };
  };

  return (
    <div>
      <span style={{ display: 'inline-flex' }}>
        <h2>Przychody</h2>
        {/* <Button innerText="SPRAWDŹ CAŁĄ HISTORIE" to="/orders" /> */}
      </span>
      <Bar height={35} width={150} data={getData} />
    </div>
  );
};

export default Income;
