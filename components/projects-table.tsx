"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Eye, MoreHorizontal } from "lucide-react"

const projects = [
  {
    id: "PRJ-001",
    customer: "Sarah Johnson",
    address: "123 Oak Street",
    type: "Full Replacement",
    status: "in-progress",
    progress: 65,
    value: "$24,500",
    estimatedCompletion: "2024-11-15",
  },
  {
    id: "PRJ-002",
    customer: "Mike Williams",
    address: "456 Maple Avenue",
    type: "Repair",
    status: "planning",
    progress: 15,
    value: "$8,200",
    estimatedCompletion: "2024-11-30",
  },
  {
    id: "PRJ-003",
    customer: "Emily Davis",
    address: "789 Pine Road",
    type: "Inspection & Repair",
    status: "in-progress",
    progress: 85,
    value: "$12,800",
    estimatedCompletion: "2024-11-08",
  },
  {
    id: "PRJ-004",
    customer: "Robert Brown",
    address: "321 Elm Street",
    type: "Emergency Repair",
    status: "urgent",
    progress: 30,
    value: "$5,600",
    estimatedCompletion: "2024-10-28",
  },
  {
    id: "PRJ-005",
    customer: "Lisa Anderson",
    address: "654 Cedar Lane",
    type: "Full Replacement",
    status: "completed",
    progress: 100,
    value: "$32,900",
    estimatedCompletion: "2024-10-20",
  },
]

const statusColors = {
  "in-progress": "default",
  planning: "secondary",
  urgent: "destructive",
  completed: "outline",
}

export function ProjectsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Projects</CardTitle>
        <CardDescription>Manage and track all roofing projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Est. Completion</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.id}</TableCell>
                <TableCell>{project.customer}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{project.address}</TableCell>
                <TableCell>{project.type}</TableCell>
                <TableCell>
                  <Badge variant={statusColors[project.status as keyof typeof statusColors] as any}>
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="w-16" />
                    <span className="text-xs text-muted-foreground">{project.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{project.value}</TableCell>
                <TableCell className="text-sm">{project.estimatedCompletion}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

