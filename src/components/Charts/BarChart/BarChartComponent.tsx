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

export const BarChartComponent: FC<Props> = ({ data }) => (
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
      <Bar dataKey="priceETH" stroke="#078c07" fill="#2fd62fb7"/>
    </BarChart>
  </ResponsiveContainer>
);
