"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '@/lib/data';

const ActosInsegurosChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="MES" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ACTOS INSEGUROS" stroke="hsl(var(--chart-1))" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActosInsegurosChart;