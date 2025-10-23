"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Plus, ChevronLeft, ChevronRight, Clock, MapPin, User } from "lucide-react"
import { useState, useEffect } from "react"

const events = [
  {
    id: 1,
    title: "Roof Inspection - Sarah Johnson",
    type: "inspection",
    time: "09:00 AM - 10:30 AM",
    location: "123 Oak Street",
    assignedTo: "John Smith",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Project Start - Mike Williams",
    type: "project",
    time: "11:00 AM - 12:00 PM",
    location: "456 Maple Avenue",
    assignedTo: "Team A",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Client Meeting - Emily Davis",
    type: "meeting",
    time: "02:00 PM - 03:00 PM",
    location: "Office",
    assignedTo: "Mike Wilson",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Material Delivery",
    type: "delivery",
    time: "03:30 PM - 04:00 PM",
    location: "789 Pine Road",
    assignedTo: "Warehouse",
    color: "bg-orange-500",
  },
]

const upcomingEvents = [
  { date: "Oct 26", title: "3 Inspections scheduled", count: 3 },
  { date: "Oct 27", title: "2 Project starts", count: 2 },
  { date: "Oct 28", title: "4 Client meetings", count: 4 },
  { date: "Oct 29", title: "5 Inspections scheduled", count: 5 },
  { date: "Oct 30", title: "1 Team training", count: 1 },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setDate(new Date())
    setMounted(true)
  }, [])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 space-y-6 p-6 bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Calendar & Scheduling</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your team's schedule and appointments
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Today's Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">8 inspections, 4 meetings</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+5 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Team Utilization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">82%</div>
                  <p className="text-xs text-muted-foreground">Optimal capacity</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">2</div>
                  <p className="text-xs text-muted-foreground">Require rescheduling</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-7">
              <div className="lg:col-span-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Today's Schedule</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium">October 25, 2024</span>
                        <Button variant="outline" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {events.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className={`h-full w-1 rounded ${event.color}`} />
                            <div className="flex-1 space-y-2">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold">{event.title}</h4>
                                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {event.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      {event.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <User className="h-3 w-3" />
                                      {event.assignedTo}
                                    </div>
                                  </div>
                                </div>
                                <Badge variant="outline">{event.type}</Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    {mounted && (
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Next 5 days</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                        <div>
                          <p className="text-sm font-medium">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.date}</p>
                        </div>
                        <Badge>{event.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

