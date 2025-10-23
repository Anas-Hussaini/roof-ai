"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Download, Send, Eye, Edit, CheckCircle, Clock, XCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const estimates = [
  {
    id: "EST-001",
    customer: "Sarah Johnson",
    address: "123 Oak Street",
    projectType: "Full Roof Replacement",
    amount: "$24,500",
    date: "2024-10-20",
    status: "approved",
    validUntil: "2024-11-20",
  },
  {
    id: "EST-002",
    customer: "Mike Williams",
    address: "456 Maple Avenue",
    projectType: "Roof Repair",
    amount: "$8,200",
    date: "2024-10-22",
    status: "pending",
    validUntil: "2024-11-22",
  },
  {
    id: "EST-003",
    customer: "Emily Davis",
    address: "789 Pine Road",
    projectType: "Inspection & Minor Repairs",
    amount: "$3,500",
    date: "2024-10-23",
    status: "sent",
    validUntil: "2024-11-23",
  },
  {
    id: "EST-004",
    customer: "Robert Brown",
    address: "321 Elm Street",
    projectType: "Emergency Repair",
    amount: "$5,600",
    date: "2024-10-18",
    status: "approved",
    validUntil: "2024-11-18",
  },
  {
    id: "EST-005",
    customer: "Lisa Anderson",
    address: "654 Cedar Lane",
    projectType: "Full Replacement + Gutters",
    amount: "$32,900",
    date: "2024-10-15",
    status: "rejected",
    validUntil: "2024-11-15",
  },
  {
    id: "EST-006",
    customer: "David Martinez",
    address: "987 Birch Court",
    projectType: "Roof Maintenance",
    amount: "$1,850",
    date: "2024-10-24",
    status: "draft",
    validUntil: "2024-11-24",
  },
]

const statusConfig = {
  approved: { variant: "default" as const, icon: CheckCircle, label: "Approved" },
  pending: { variant: "secondary" as const, icon: Clock, label: "Pending" },
  sent: { variant: "outline" as const, icon: Send, label: "Sent" },
  rejected: { variant: "destructive" as const, icon: XCircle, label: "Rejected" },
  draft: { variant: "secondary" as const, icon: Edit, label: "Draft" },
}

export default function EstimatesPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 space-y-6 p-6 bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Estimates & Quotes</h1>
                <p className="text-muted-foreground mt-1">
                  Create and manage project estimates
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Estimate
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Total Estimates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground">This month: 12</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">Awaiting customer response</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$428K</div>
                  <p className="text-xs text-muted-foreground">Pending estimates</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Estimates</CardTitle>
                    <CardDescription>Manage your project quotes and estimates</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="draft">Draft (1)</TabsTrigger>
                    <TabsTrigger value="sent">Sent (1)</TabsTrigger>
                    <TabsTrigger value="pending">Pending (1)</TabsTrigger>
                    <TabsTrigger value="approved">Approved (2)</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Estimate ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Address</TableHead>
                          <TableHead>Project Type</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Valid Until</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {estimates.map((estimate) => {
                          const status = statusConfig[estimate.status as keyof typeof statusConfig]
                          const StatusIcon = status.icon

                          return (
                            <TableRow key={estimate.id}>
                              <TableCell className="font-medium">{estimate.id}</TableCell>
                              <TableCell>{estimate.customer}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {estimate.address}
                              </TableCell>
                              <TableCell>{estimate.projectType}</TableCell>
                              <TableCell className="font-medium">{estimate.amount}</TableCell>
                              <TableCell className="text-sm">{estimate.date}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {estimate.validUntil}
                              </TableCell>
                              <TableCell>
                                <Badge variant={status.variant}>
                                  <StatusIcon className="mr-1 h-3 w-3" />
                                  {status.label}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                  <Button variant="ghost" size="icon">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <Send className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </TabsContent>

                  <TabsContent value="draft">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing draft estimates
                    </div>
                  </TabsContent>

                  <TabsContent value="sent">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing sent estimates
                    </div>
                  </TabsContent>

                  <TabsContent value="pending">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing pending estimates
                    </div>
                  </TabsContent>

                  <TabsContent value="approved">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing approved estimates
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Estimate Templates</CardTitle>
                  <CardDescription>Start with pre-configured templates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Residential Roof Replacement
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Commercial Roof Repair
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Emergency Repair Service
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Roof Inspection Service
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest estimate updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">EST-001 Approved</p>
                      <p className="text-xs text-muted-foreground">Sarah Johnson - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">EST-002 Sent</p>
                      <p className="text-xs text-muted-foreground">Mike Williams - 5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">EST-003 Created</p>
                      <p className="text-xs text-muted-foreground">Emily Davis - 1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">EST-005 Rejected</p>
                      <p className="text-xs text-muted-foreground">Lisa Anderson - 2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

