"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "John Smith",
    role: "Lead Roofer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    projectsCompleted: 12,
    performance: 95,
    status: "active",
  },
  {
    name: "Sarah Johnson",
    role: "Inspector",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    projectsCompleted: 18,
    performance: 92,
    status: "active",
  },
  {
    name: "Mike Wilson",
    role: "Project Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    projectsCompleted: 8,
    performance: 88,
    status: "on-site",
  },
  {
    name: "Emily Davis",
    role: "Roofer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    projectsCompleted: 15,
    performance: 90,
    status: "active",
  },
]

export function TeamPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
        <CardDescription>Current team members and their stats</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <Badge variant={member.status === "active" ? "default" : "secondary"}>
                    {member.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Performance</span>
                    <span className="font-medium">{member.performance}%</span>
                  </div>
                  <Progress value={member.performance} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  {member.projectsCompleted} projects completed
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

