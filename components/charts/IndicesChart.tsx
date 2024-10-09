"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '@/lib/data';

const IndicesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="MES" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="INDICE DE  GRAVEDAD" stroke="hsl(var(--chart-1))" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="INDICE DE FRECUENCIA" stroke="hsl(var(--chart-2))" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="INDICE DE ACCIDENTABILIDAD" stroke="hsl(var(--chart-3))" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IndicesChart;