"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, CloudRain, Sun, Wind } from "lucide-react"

const weatherData = [
  { day: "Mon", temp: "72°", condition: "sunny", icon: Sun },
  { day: "Tue", temp: "68°", condition: "cloudy", icon: Cloud },
  { day: "Wed", temp: "65°", condition: "rainy", icon: CloudRain },
  { day: "Thu", temp: "70°", condition: "windy", icon: Wind },
  { day: "Fri", temp: "74°", condition: "sunny", icon: Sun },
]

export function WeatherWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2">
          {weatherData.map((day) => (
            <div key={day.day} className="flex flex-col items-center gap-2 rounded-lg border p-2">
              <span className="text-xs font-medium text-muted-foreground">{day.day}</span>
              <day.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{day.temp}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

