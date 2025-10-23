"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Calendar, Users } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button className="w-full justify-start" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Inspection
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Create Estimate
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Users className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </CardContent>
    </Card>
  )
}

