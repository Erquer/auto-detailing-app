import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { OrderService } from '../../../../services/OrderService';

export interface IncomeChartProps {
  height: number;
}

export const IncomeChart = (props: IncomeChartProps) => {
  const [incomes, setIncomes] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await OrderService.getProfitsFromLastWeek();
      setIncomes(data);
      setLoading(false);
    })();
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      // eslint-disable-next-line react/destructuring-assignment
      height: props.height,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: '#F15B46',
          }, {
            from: -45,
            to: 0,
            color: '#FEB019',
          }],
        },
        columnWidth: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'Income',
      },
      labels: {
        formatter(y: any) {
          return y;
        },
      },
    },
    xaxis: {
      type: 'datetime',
      categories: incomes && incomes.map((income: any) => income.date),
      labels: {
        rotate: -90,
      },
    },
  };
  return (
    <div>
      {loading ? 'Loading...' : (
        <ReactApexChart
          options={options}
          series={[{
            name: 'profits',
            data: incomes.map((income: any) => income.profit),
          }]}
          type="bar"
          height={350}
        />
      )}
    </div>
  );
};
