"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Search, MapPin, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const inspections = [
  {
    id: "INS-001",
    address: "123 Oak Street, Springfield",
    customer: "Sarah Johnson",
    type: "Annual Inspection",
    date: "2024-10-25",
    time: "09:00 AM",
    status: "scheduled",
    assignedTo: "John Smith",
    notes: "Customer reported minor leaks",
  },
  {
    id: "INS-002",
    address: "456 Maple Avenue, Riverside",
    customer: "Mike Williams",
    type: "Storm Damage Assessment",
    date: "2024-10-25",
    time: "11:00 AM",
    status: "in-progress",
    assignedTo: "Sarah Johnson",
    notes: "Recent hail storm damage",
  },
  {
    id: "INS-003",
    address: "789 Pine Road, Lakewood",
    customer: "Emily Davis",
    type: "Pre-Installation",
    date: "2024-10-25",
    time: "02:00 PM",
    status: "scheduled",
    assignedTo: "Mike Wilson",
    notes: "New roof installation planned",
  },
  {
    id: "INS-004",
    address: "321 Elm Street, Hillside",
    customer: "Robert Brown",
    type: "Emergency Inspection",
    date: "2024-10-24",
    time: "04:00 PM",
    status: "completed",
    assignedTo: "John Smith",
    notes: "Urgent repair needed - approved",
  },
  {
    id: "INS-005",
    address: "654 Cedar Lane, Meadowview",
    customer: "Lisa Anderson",
    type: "Post-Installation",
    date: "2024-10-24",
    time: "10:00 AM",
    status: "completed",
    assignedTo: "Emily Davis",
    notes: "Quality check - all good",
  },
]

const statusConfig = {
  scheduled: { color: "bg-blue-500", label: "Scheduled", icon: Calendar },
  "in-progress": { color: "bg-yellow-500", label: "In Progress", icon: Clock },
  completed: { color: "bg-green-500", label: "Completed", icon: CheckCircle2 },
  urgent: { color: "bg-red-500", label: "Urgent", icon: AlertTriangle },
}

export default function InspectionsPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 space-y-6 p-6 bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Inspections</h1>
                <p className="text-muted-foreground mt-1">
                  Schedule and track all roof inspections
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule Inspection
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Today's Inspections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">3 completed, 5 pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32</div>
                  <p className="text-xs text-muted-foreground">+4 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Urgent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <p className="text-xs text-muted-foreground">Require immediate attention</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94%</div>
                  <p className="text-xs text-muted-foreground">Above target (90%)</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Inspection Schedule</CardTitle>
                    <CardDescription>Manage your inspection calendar</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search inspections..." className="pl-9 w-[300px]" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4 mt-6">
                    {inspections.map((inspection) => {
                      const status = statusConfig[inspection.status as keyof typeof statusConfig]
                      const StatusIcon = status.icon
                      
                      return (
                        <Card key={inspection.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="space-y-3 flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-3">
                                      <h3 className="font-semibold text-lg">{inspection.customer}</h3>
                                      <Badge variant="outline">{inspection.id}</Badge>
                                      <div className="flex items-center gap-1">
                                        <div className={`h-2 w-2 rounded-full ${status.color}`} />
                                        <span className="text-sm text-muted-foreground">{status.label}</span>
                                      </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{inspection.type}</p>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    {inspection.address}
                                  </div>
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    {inspection.date} at {inspection.time}
                                  </div>
                                </div>

                                <div className="flex items-center gap-6 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Assigned to: </span>
                                    <span className="font-medium">{inspection.assignedTo}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Notes: </span>
                                    <span>{inspection.notes}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">View Details</Button>
                                <Button size="sm">
                                  <StatusIcon className="mr-2 h-4 w-4" />
                                  Update Status
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </TabsContent>

                  <TabsContent value="today">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing today's inspections
                    </div>
                  </TabsContent>

                  <TabsContent value="upcoming">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing upcoming inspections
                    </div>
                  </TabsContent>

                  <TabsContent value="completed">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing completed inspections
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

