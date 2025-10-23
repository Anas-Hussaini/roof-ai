"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    type: "inspection",
    title: "Roof Inspection Completed",
    customer: "Sarah Johnson",
    address: "123 Oak Street",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "project",
    title: "New Project Started",
    customer: "Mike Williams",
    address: "456 Maple Avenue",
    time: "5 hours ago",
    status: "in-progress",
  },
  {
    id: 3,
    type: "estimate",
    title: "Estimate Approved",
    customer: "Emily Davis",
    address: "789 Pine Road",
    time: "1 day ago",
    status: "approved",
  },
  {
    id: 4,
    type: "inspection",
    title: "Urgent Repair Needed",
    customer: "Robert Brown",
    address: "321 Elm Street",
    time: "1 day ago",
    status: "urgent",
  },
  {
    id: 5,
    type: "project",
    title: "Project Milestone Reached",
    customer: "Lisa Anderson",
    address: "654 Cedar Lane",
    time: "2 days ago",
    status: "completed",
  },
]

const statusColors = {
  completed: "bg-green-500",
  "in-progress": "bg-blue-500",
  approved: "bg-purple-500",
  urgent: "bg-red-500",
}

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  approved: "Approved",
  urgent: "Urgent",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your roofing operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className={statusColors[activity.status as keyof typeof statusColors]}>
                  {activity.customer.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <Badge variant="secondary" className="text-xs">
                    {statusLabels[activity.status as keyof typeof statusLabels]}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.customer}</p>
                <p className="text-xs text-muted-foreground">{activity.address}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

