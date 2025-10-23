"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { MetricsCards } from "@/components/metrics-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { ProjectsChart } from "@/components/projects-chart"
import { TeamPerformance } from "@/components/team-performance"
import { WeatherWidget } from "@/components/weather-widget"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell, Legend } from "recharts"

const customerSatisfaction = [
  { month: "Jan", score: 4.2 },
  { month: "Feb", score: 4.3 },
  { month: "Mar", score: 4.5 },
  { month: "Apr", score: 4.4 },
  { month: "May", score: 4.6 },
  { month: "Jun", score: 4.7 },
  { month: "Jul", score: 4.8 },
]

const projectTypes = [
  { name: "Full Replacement", value: 35, color: "#3b82f6" },
  { name: "Repairs", value: 30, color: "#8b5cf6" },
  { name: "Inspections", value: 20, color: "#10b981" },
  { name: "Maintenance", value: 15, color: "#f59e0b" },
]

const chartConfig = {
  score: {
    label: "Satisfaction Score",
    color: "hsl(var(--chart-1))",
  },
}

export default function AnalyticsPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 space-y-6 p-6 bg-muted/30">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive insights into your business performance
              </p>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <MetricsCards />

                <div className="grid gap-6 lg:grid-cols-2">
                  <RevenueChart />
                  <ProjectsChart />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Satisfaction Trend</CardTitle>
                      <CardDescription>Average satisfaction score over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-[300px] w-full">
                        <LineChart data={customerSatisfaction}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, 5]} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="score"
                            stroke="var(--color-score)"
                            strokeWidth={3}
                            dot={{ fill: "var(--color-score)", r: 4 }}
                          />
                        </LineChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Project Distribution</CardTitle>
                      <CardDescription>Breakdown by project type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-[300px] w-full">
                        <PieChart>
                          <Pie
                            data={projectTypes}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {projectTypes.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="financial" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1,284,500</div>
                      <p className="text-xs text-muted-foreground">Year to date</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">28.5%</div>
                      <p className="text-xs text-muted-foreground">+2.3% from last year</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$84,200</div>
                      <p className="text-xs text-muted-foreground">12 invoices pending</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Avg. Project Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$26,214</div>
                      <p className="text-xs text-muted-foreground">+8% increase</p>
                    </CardContent>
                  </Card>
                </div>

                <RevenueChart />
              </TabsContent>

              <TabsContent value="operations" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">14 days</div>
                      <p className="text-xs text-muted-foreground">-2 days improvement</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">On-Time Completion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">89%</div>
                      <p className="text-xs text-muted-foreground">Above industry avg</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Material Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">94%</div>
                      <p className="text-xs text-muted-foreground">Waste reduction</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Safety Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">98/100</div>
                      <p className="text-xs text-muted-foreground">Zero incidents</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <ProjectsChart />
                  <WeatherWidget />
                </div>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Team Size</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">+3 this quarter</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Avg. Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">91%</div>
                      <p className="text-xs text-muted-foreground">Excellent rating</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Utilization Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">87%</div>
                      <p className="text-xs text-muted-foreground">Optimal level</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Training Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">486</div>
                      <p className="text-xs text-muted-foreground">This quarter</p>
                    </CardContent>
                  </Card>
                </div>

                <TeamPerformance />
              </TabsContent>
            </Tabs>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

