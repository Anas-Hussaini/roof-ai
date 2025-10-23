"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsCards } from "@/components/metrics-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { ProjectsChart } from "@/components/projects-chart"
import { RecentActivity } from "@/components/recent-activity"
import { AIInsights } from "@/components/ai-insights"
import { QuickActions } from "@/components/quick-actions"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 space-y-6 p-6 bg-muted/30">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's what's happening with your roofing business today.
              </p>
            </div>
            
            <MetricsCards />
            
            <div className="grid gap-6 lg:grid-cols-7">
              <div className="lg:col-span-5">
                <RevenueChart />
              </div>
              <div className="lg:col-span-2">
                <QuickActions />
              </div>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-7">
              <div className="lg:col-span-4">
                <AIInsights />
              </div>
              <div className="lg:col-span-3">
                <ProjectsChart />
              </div>
            </div>
            
            <RecentActivity />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
