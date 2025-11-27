'use client';

import * as React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

// ---------------------------
// Sample Data: Users by Country and Year
// ---------------------------
const chartData = [
  { country: 'USA', '2021': 200, '2022': 430, '2023': 204 },
  { country: 'IND', '2021': 320, '2022': 490, '2023': 120 },
  { country: 'UK', '2021': 210, '2022': 430, '2023': 600 },
  { country: 'GER', '2021': 150, '2022': 310, '2023': 460 },
  { country: 'CAN', '2021': 180, '2022': 360, '2023': 500 },
  { country: 'FRA', '2021': 250, '2022': 400, '2023': 550 },
  { country: 'BRA', '2021': 300, '2022': 250, '2023': 700 },
  { country: 'JPN', '2021': 190, '2022': 450, '2023': 400 },
  { country: 'AUS', '2021': 170, '2022': 320, '2023': 480 },
  { country: 'ITA', '2021': 210, '2022': 350, '2023': 530 },
  { country: 'RUS', '2021': 280, '2022': 410, '2023': 600 },
  { country: 'MEX', '2021': 150, '2022': 300, '2023': 400 },
  { country: 'KOR', '2021': 200, '2022': 420, '2023': 550 },
  { country: 'ESP', '2021': 180, '2022': 360, '2023': 520 },
  { country: 'CHN', '2021': 400, '2022': 700, '2023': 650 },
  { country: 'NED', '2021': 160, '2022': 300, '2023': 450 },
  { country: 'SWE', '2021': 130, '2022': 280, '2023': 400 },
  { country: 'NOR', '2021': 120, '2022': 250, '2023': 380 },
  { country: 'TUR', '2021': 200, '2022': 350, '2023': 500 },
  { country: 'SAU', '2021': 150, '2022': 310, '2023': 430 },
];

// ---------------------------
// Chart Colors
// ---------------------------
const chartConfig = {
  '2021': { label: '2021', color: 'var(--chart-1)' },
  '2022': { label: '2022', color: 'var(--chart-2)' },
  '2023': { label: '2023', color: 'var(--chart-3)' },
};

// ---------------------------
// Component
// ---------------------------
export function UserGrowthByCountry() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-xl">User Growth by Country</CardTitle>
      </CardHeader>

      <CardContent className="">
        <ChartContainer config={chartConfig}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fill2021" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fill2022" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fill2023" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="2021"
              stroke="var(--chart-1)"
              fill="url(#fill2021)"
            />
            <Area
              type="monotone"
              dataKey="2022"
              stroke="var(--chart-2)"
              fill="url(#fill2022)"
            />
            <Area
              type="monotone"
              dataKey="2023"
              stroke="var(--chart-3)"
              fill="url(#fill2023)"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
