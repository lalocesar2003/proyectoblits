"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '@/lib/data';

const AccidentesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="MES" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ACCIDENTES DE TRABAJO" fill="hsl(var(--chart-1))" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AccidentesChart;