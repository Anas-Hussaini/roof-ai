"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from "lucide-react"

const insights = [
  {
    id: 1,
    type: "opportunity",
    icon: TrendingUp,
    title: "Revenue Growth Opportunity",
    description: "Historic homes in the downtown area show 32% higher conversion rates for premium roofing materials.",
    priority: "high",
  },
  {
    id: 2,
    type: "alert",
    icon: AlertCircle,
    title: "Weather Alert",
    description: "Heavy storms predicted next week. Consider rescheduling 3 outdoor inspections.",
    priority: "urgent",
  },
  {
    id: 3,
    type: "suggestion",
    icon: Lightbulb,
    title: "Operational Efficiency",
    description: "Grouping inspections by zip code could reduce travel time by 18% and save $450/week.",
    priority: "medium",
  },
  {
    id: 4,
    type: "prediction",
    icon: Sparkles,
    title: "Demand Forecast",
    description: "AI predicts 40% increase in repair requests in the next 2 months based on historical patterns.",
    priority: "high",
  },
]

const priorityColors = {
  urgent: "destructive",
  high: "default",
  medium: "secondary",
}

export function AIInsights() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          <CardTitle>AI Insights</CardTitle>
        </div>
        <CardDescription>Powered by machine learning algorithms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="flex gap-3 rounded-lg border p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium">{insight.title}</p>
                  <Badge variant={priorityColors[insight.priority as keyof typeof priorityColors] as any} className="text-xs">
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

