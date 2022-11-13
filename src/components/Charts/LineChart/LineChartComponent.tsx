import { FC } from 'react';
import {
  LineChart,
  Line,
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

export const LineChartComponent: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
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
      <Line dataKey="priceSolana" stroke="#078c07" fill="#08bf08" />
    </LineChart>
  </ResponsiveContainer>
);