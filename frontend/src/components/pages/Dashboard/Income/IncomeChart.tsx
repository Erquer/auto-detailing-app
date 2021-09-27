import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { OrderService } from '../../../../services/OrderService';

export interface IncomeChartProps {
  height: number | string;
  // eslint-disable-next-line no-unused-vars
  getOrdersByDate?: (date: string) => void;
}

export const IncomeChart = (props: IncomeChartProps) => {
  const { height, getOrdersByDate } = props;
  const [incomes, setIncomes] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await OrderService.getProfitsFromLastWeek();
      setIncomes(data);
      setLoading(false);
    })();
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height,
      events: {
        dataPointSelection(e: any, chart?: any, options?: any) {
          // eslint-disable-next-line max-len,no-unused-expressions
          getOrdersByDate &&
            getOrdersByDate(
              options.w.config.xaxis.categories[options.dataPointIndex],
            );
        },
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: '#F15B46',
            },
            {
              from: -45,
              to: 0,
              color: '#FEB019',
            },
          ],
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
    markers: {
      // eslint-disable-next-line no-console
      onClick: () => {
        console.log('Działam');
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
  };
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <ReactApexChart
          options={chartOptions}
          series={[
            {
              name: 'profits',
              data: incomes.map((income: any) => income.profit),
            },
          ]}
          type="bar"
          height={350}
        />
      )}
    </div>
  );
};
