import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Data } from '../../../types/coinsDataTypes';

type Props = {
  data: Data[];
};

export const StackBarChartComponent: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{
        top: 50,
        right: 50,
        left: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3" vertical={true} />
      <XAxis dataKey="year" axisLine={true} tickLine={false} />
      <YAxis axisLine={true} tickLine={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="priceBitCoin" stackId="a" stroke="#078c07" fill="#025c02" />
      <Bar dataKey="priceETH" stackId="a" stroke="#078c07" fill="#078c07" />
      <Bar dataKey="priceSolana" stackId="a" stroke="#078c07" fill="#b6d627" />
    </BarChart>
  </ResponsiveContainer>
);