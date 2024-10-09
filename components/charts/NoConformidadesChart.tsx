"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '@/lib/data';

const NoConformidadesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="MES" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="NO CONFORIDADES RECIBIDAS" fill="hsl(var(--chart-1))" />
        <Bar dataKey="NO CONFORMIDADES CORREGIDAS" fill="hsl(var(--chart-2))" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default NoConformidadesChart;