"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccidentesChart from './charts/AccidentesChart';
import InspeccionesChart from './charts/InspeccionesChart';
import CapacitacionesChart from './charts/CapacitacionesChart';
import NoConformidadesChart from './charts/NoConformidadesChart';
import ActosInsegurosChart from './charts/ActosInsegurosChart';
import CondicionesInsegurasChart from './charts/CondicionesInsegurasChart';
import IndicesChart from './charts/IndicesChart';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Accidentes</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <AccidentesChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inspecciones</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <InspeccionesChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Capacitaciones</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <CapacitacionesChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>No Conformidades</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <NoConformidadesChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Actos Inseguros</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ActosInsegurosChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Condiciones Inseguras</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <CondicionesInsegurasChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle>Índices de Seguridad</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <IndicesChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;