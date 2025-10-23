"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Hammer, ClipboardCheck, AlertTriangle } from "lucide-react"

const metrics = [
  {
    title: "Total Revenue",
    value: "$284,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Projects",
    value: "23",
    change: "+3 from last month",
    trend: "up",
    icon: Hammer,
  },
  {
    title: "Completed Inspections",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ClipboardCheck,
  },
  {
    title: "Urgent Repairs",
    value: "7",
    change: "-2 from last week",
    trend: "down",
    icon: AlertTriangle,
  },
]

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              {metric.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              {metric.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

