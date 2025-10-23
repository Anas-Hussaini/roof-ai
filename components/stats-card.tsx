"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: LucideIcon
}

export function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className={`text-xs ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {change}
            </p>
          </div>
          <div className={`rounded-full p-3 ${trend === "up" ? "bg-green-100" : "bg-red-100"}`}>
            <Icon className={`h-6 w-6 ${trend === "up" ? "text-green-600" : "text-red-600"}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

