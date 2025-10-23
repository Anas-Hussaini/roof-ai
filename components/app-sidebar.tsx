"use client"

import {
  Home,
  LayoutDashboard,
  ClipboardList,
  FileText,
  Users,
  Settings,
  BarChart3,
  Calendar,
  Hammer,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Projects", icon: Hammer, url: "/projects" },
  { title: "Inspections", icon: ClipboardList, url: "/inspections" },
  { title: "Analytics", icon: BarChart3, url: "/analytics" },
  { title: "Calendar", icon: Calendar, url: "/calendar" },
  { title: "Estimates", icon: FileText, url: "/estimates" },
  { title: "Customers", icon: Users, url: "/customers" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">RoofAI</span>
            <span className="text-xs text-muted-foreground">Analytics Platform</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=manager" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Manager</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

