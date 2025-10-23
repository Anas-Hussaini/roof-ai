"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Search, Phone, Mail, MapPin, History, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const customers = [
  {
    id: "CUS-001",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "(555) 123-4567",
    address: "123 Oak Street, Springfield, IL 62701",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    totalProjects: 3,
    totalSpent: "$42,500",
    status: "active",
    lastContact: "2 days ago",
    rating: 5,
  },
  {
    id: "CUS-002",
    name: "Mike Williams",
    email: "mike.w@email.com",
    phone: "(555) 234-5678",
    address: "456 Maple Avenue, Riverside, CA 92501",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    totalProjects: 1,
    totalSpent: "$8,200",
    status: "active",
    lastContact: "1 week ago",
    rating: 4,
  },
  {
    id: "CUS-003",
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "(555) 345-6789",
    address: "789 Pine Road, Lakewood, CO 80226",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    totalProjects: 2,
    totalSpent: "$28,300",
    status: "active",
    lastContact: "3 days ago",
    rating: 5,
  },
  {
    id: "CUS-004",
    name: "Robert Brown",
    email: "robert.b@email.com",
    phone: "(555) 456-7890",
    address: "321 Elm Street, Hillside, NJ 07205",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    totalProjects: 1,
    totalSpent: "$5,600",
    status: "lead",
    lastContact: "2 weeks ago",
    rating: 4,
  },
  {
    id: "CUS-005",
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    phone: "(555) 567-8901",
    address: "654 Cedar Lane, Meadowview, VA 24361",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    totalProjects: 4,
    totalSpent: "$68,900",
    status: "vip",
    lastContact: "Yesterday",
    rating: 5,
  },
]

const statusColors = {
  active: "default" as const,
  lead: "secondary" as const,
  vip: "default" as const,
  inactive: "outline" as const,
}

export default function CustomersPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 space-y-6 p-6 bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your customer relationships and history
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-muted-foreground">+12 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">Ongoing work</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Avg. Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.7/5</div>
                  <p className="text-xs text-muted-foreground">Based on 156 reviews</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Referral Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34%</div>
                  <p className="text-xs text-muted-foreground">Above industry avg</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Directory</CardTitle>
                    <CardDescription>All your customers in one place</CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search customers..." className="pl-9 w-[300px]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All Customers</TabsTrigger>
                    <TabsTrigger value="active">Active (187)</TabsTrigger>
                    <TabsTrigger value="vip">VIP (24)</TabsTrigger>
                    <TabsTrigger value="leads">Leads (36)</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4 mt-6">
                    {customers.map((customer) => (
                      <Card key={customer.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={customer.avatar} />
                              <AvatarFallback>{customer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>

                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-lg">{customer.name}</h3>
                                    <Badge variant={statusColors[customer.status as keyof typeof statusColors]}>
                                      {customer.status}
                                    </Badge>
                                    <Badge variant="outline">{customer.id}</Badge>
                                  </div>
                                  <div className="flex items-center gap-1 mt-1">
                                    {Array.from({ length: customer.rating }).map((_, i) => (
                                      <span key={i} className="text-yellow-500">★</span>
                                    ))}
                                    <span className="text-sm text-muted-foreground ml-2">
                                      ({customer.rating}/5)
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-muted-foreground">Total Spent</p>
                                  <p className="text-xl font-bold">{customer.totalSpent}</p>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Mail className="h-4 w-4" />
                                  {customer.email}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Phone className="h-4 w-4" />
                                  {customer.phone}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  {customer.address}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <History className="h-4 w-4" />
                                  Last contact: {customer.lastContact}
                                </div>
                              </div>

                              <div className="flex items-center gap-4 pt-2">
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Projects: </span>
                                  <span className="font-medium">{customer.totalProjects}</span>
                                </div>
                                <div className="flex gap-2 ml-auto">
                                  <Button variant="outline" size="sm">
                                    <Phone className="mr-2 h-3 w-3" />
                                    Call
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Mail className="mr-2 h-3 w-3" />
                                    Email
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <FileText className="mr-2 h-3 w-3" />
                                    View History
                                  </Button>
                                  <Button size="sm">Schedule Visit</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="active">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing active customers
                    </div>
                  </TabsContent>

                  <TabsContent value="vip">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing VIP customers
                    </div>
                  </TabsContent>

                  <TabsContent value="leads">
                    <div className="text-center py-12 text-muted-foreground">
                      Showing leads
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

