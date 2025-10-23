# Quick Start Guide - RoofAI Analytics

## 🚀 Get Started in 3 Steps

### Step 1: Navigate to Project
```bash
cd roofing-analytics
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

## 📱 What You'll See

### Main Dashboard
The application opens to a comprehensive analytics dashboard with:

1. **Sidebar Navigation** (Left)
   - Click the menu items to navigate
   - Collapsible design for more space
   - User profile at the bottom

2. **Top Navigation Bar**
   - Search functionality
   - Notification bell with badge
   - Sidebar toggle button

3. **Dashboard Tabs**
   - **Overview**: Main analytics and metrics
   - **Projects**: Detailed project table
   - **Analytics**: Advanced analytics and team performance
   - **Inspections**: Recent inspection activities

### Key Features to Explore

#### 📊 Overview Tab
- **4 Metric Cards** showing key performance indicators
- **Revenue Chart** with AI projections (blue = actual, dashed = projected)
- **Quick Actions Panel** for common tasks
- **AI Insights** with smart recommendations
- **Project Status Chart** showing distribution
- **Recent Activity Feed** with latest updates

#### 🏗️ Projects Tab
- Complete project management table
- Filter and sort capabilities
- Status badges and progress bars
- Quick action buttons

#### 📈 Analytics Tab
- Team performance tracking
- Weather forecast widget
- Enhanced metrics and charts

#### 🔍 Inspections Tab
- Recent inspection activities
- Customer information
- Urgency indicators

## 🎨 UI Customization

### Colors
The app uses a professional blue/purple color scheme optimized for roofing companies. To customize:

1. Open `app/globals.css`
2. Modify the CSS variables in the `:root` section
3. Save and see changes instantly!

### Components
All components are in the `components/` folder:
- `app-sidebar.tsx` - Navigation sidebar
- `dashboard-header.tsx` - Top navigation
- `metrics-cards.tsx` - KPI cards
- `revenue-chart.tsx` - Revenue visualization
- `projects-chart.tsx` - Project status chart
- `ai-insights.tsx` - AI recommendations
- `projects-table.tsx` - Project management table
- `recent-activity.tsx` - Activity feed
- `quick-actions.tsx` - Quick action buttons
- `weather-widget.tsx` - Weather forecast
- `team-performance.tsx` - Team stats

### Adding New Features
1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add it to the desired tab

## 🔧 Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

## 📦 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript

## 🎯 Demo Data

The application currently uses mock data for demonstration. All data is defined within the components and can be easily replaced with real API calls.

### Mock Data Includes:
- Revenue trends (7 months)
- Project information (5 sample projects)
- Team members (4 sample members)
- Recent activities (5 sample activities)
- AI insights (4 sample insights)
- Weather forecast (5 days)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 768px)

## 🎨 Dark Mode

The app includes built-in dark mode support. To enable:
1. Add a theme toggle button
2. Use the `dark` class on the `<html>` element
3. All components automatically adapt!

## 💡 Tips

1. **Explore the Tabs**: Each tab shows different aspects of the roofing business
2. **Check AI Insights**: The purple sparkle icon indicates AI-powered features
3. **Hover for Details**: Many elements have tooltips with additional information
4. **Mobile View**: Try resizing your browser to see responsive design
5. **Search Bar**: The search functionality is ready for integration

## 🤝 Next Steps

1. ✅ Explore the demo dashboard
2. ⬜ Connect to real data sources
3. ⬜ Customize colors and branding
4. ⬜ Add authentication
5. ⬜ Deploy to production

## 📚 Documentation

- See `README.md` for full project overview
- See `FEATURES.md` for detailed feature list
- Check `components/` for component documentation

---

**Need Help?** Check the Next.js documentation or shadcn/ui docs for component details.

Enjoy exploring RoofAI Analytics! 🎉

