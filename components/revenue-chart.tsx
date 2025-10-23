"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", revenue: 42000, projected: 38000 },
  { month: "Feb", revenue: 48000, projected: 42000 },
  { month: "Mar", revenue: 52000, projected: 48000 },
  { month: "Apr", revenue: 61000, projected: 55000 },
  { month: "May", revenue: 58000, projected: 59000 },
  { month: "Jun", revenue: 68000, projected: 62000 },
  { month: "Jul", revenue: 72000, projected: 68000 },
]

const chartConfig = {
  revenue: {
    label: "Actual Revenue",
    color: "hsl(var(--chart-1))",
  },
  projected: {
    label: "Projected",
    color: "hsl(var(--chart-2))",
  },
}

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Analytics</CardTitle>
        <CardDescription>AI-powered revenue tracking and projections</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="var(--color-projected)"
              fill="var(--color-projected)"
              fillOpacity={0.2}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              fill="var(--color-revenue)"
              fillOpacity={0.4}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

