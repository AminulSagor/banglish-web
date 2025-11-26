'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useState } from 'react';

type ChartPoint = {
  month: string;
  users: number;
};

const RowTwo = () => {
  const [period, setPeriod] = useState<'six-month' | 'twelve-month'>(
    'six-month'
  );

  const chartData6: ChartPoint[] = [
    { month: 'January', users: 186 },
    { month: 'February', users: 305 },
    { month: 'March', users: 237 },
    { month: 'April', users: 73 },
    { month: 'May', users: 209 },
    { month: 'June', users: 1000 },
  ];

  const chartData12: ChartPoint[] = [
    { month: 'January', users: 186 },
    { month: 'February', users: 305 },
    { month: 'March', users: 237 },
    { month: 'April', users: 73 },
    { month: 'May', users: 209 },
    { month: 'June', users: 1000 },
    { month: 'July', users: 720 },
    { month: 'August', users: 540 },
    { month: 'September', users: 680 },
    { month: 'October', users: 820 },
    { month: 'November', users: 910 },
    { month: 'December', users: 1200 },
  ];

  // mapping
  const cData: Record<'six-month' | 'twelve-month', ChartPoint[]> = {
    'six-month': chartData6,
    'twelve-month': chartData12,
  };

  // chart config must use the same dataKey (users)
  const chartConfig = {
    users: {
      label: 'Users',
      color: 'var(--chart-1)',
    },
  } satisfies ChartConfig;

  return (
    <>
      <Card className="col-span-2">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-xl">Total New Users</CardTitle>

          {/* fixed here */}
          <Select
            onValueChange={(value: string) =>
              setPeriod(value as 'six-month' | 'twelve-month')
            }
          >
            <SelectTrigger className="text-sm hover:cursor-pointer">
              <SelectValue placeholder="6 Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="six-month">6 Month</SelectItem>
              <SelectItem value="twelve-month">12 Month</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={cData[period]}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <YAxis
                dataKey="users"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              {/* match dataKey with chartConfig */}
              <Bar dataKey="users" fill="var(--color-users)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground ">
            {' '}
            {period === 'six-month' ? 'Last 6 months' : 'Last 12 months'}
          </p>
        </CardFooter>
      </Card>

      <Card className="col-span-3"></Card>
    </>
  );
};

export default RowTwo;
