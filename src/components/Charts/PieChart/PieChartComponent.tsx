import { FC } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import { Data } from '../../../types/coinsDataTypes';

type Props = {
  data: Data[];
};

const getSum = (year: number, data: Data[]) => {
  const count: Data | undefined = data.find((number) => number.year === year);

  if (count) {
    return count?.priceBitCoin + count?.priceETH + count?.priceSolana;
  }

  return;
};

export const PieChartComponent: FC<Props> = ({ data }) => {
  const newData = [
    { year: 2016, value: getSum(2016, data) },
    { year: 2017, value: getSum(2017, data) },
    { year: 2018, value: getSum(2018, data) },
    { year: 2019, value: getSum(2019, data) },
    { year: 2020, value: getSum(2020, data) },
    { year: 2021, value: getSum(2021, data) },
    { year: 2022, value: getSum(2022, data) },
  ];

  const colors = ['#078c07', '#025c02', '#08bf08', '#79fc79', '#34c734', '#228a22', '#b6d627'];

  return (
    <ResponsiveContainer>
      <PieChart
        data={newData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <Tooltip />
        <Legend />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={newData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#08bf08"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};