# Deployment Guide - RoofAI Analytics

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
Vercel is the easiest way to deploy Next.js applications.

#### Steps:
1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Your app will be live in ~2 minutes!

**Benefits**:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic preview deployments
- ✅ Zero configuration
- ✅ Free tier available

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 3: Docker

Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t roofai-analytics .
docker run -p 3000:3000 roofai-analytics
```

### Option 4: Traditional VPS (AWS, DigitalOcean, etc.)

1. SSH into your server:
```bash
ssh user@your-server.com
```

2. Clone your repository:
```bash
git clone YOUR_REPO_URL
cd roofing-analytics
```

3. Install dependencies:
```bash
npm install
```

4. Build:
```bash
npm run build
```

5. Install PM2 for process management:
```bash
npm install -g pm2
pm2 start npm --name "roofai" -- start
pm2 save
pm2 startup
```

6. Set up Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔐 Environment Variables

Create a `.env.local` file for sensitive data (never commit this):

```bash
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://your-domain.com

# API Keys
WEATHER_API_KEY=your_weather_api_key
MAPS_API_KEY=your_maps_api_key

# Email
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@yourdomain.com
```

## 📊 Post-Deployment Checklist

### Performance
- [ ] Enable caching headers
- [ ] Configure CDN
- [ ] Optimize images
- [ ] Enable compression
- [ ] Set up monitoring

### Security
- [ ] Configure HTTPS
- [ ] Set up CORS properly
- [ ] Add rate limiting
- [ ] Configure CSP headers
- [ ] Enable security headers

### Monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure analytics (e.g., Google Analytics)
- [ ] Set up uptime monitoring
- [ ] Configure log aggregation

### SEO
- [ ] Add sitemap.xml
- [ ] Configure robots.txt
- [ ] Add meta tags
- [ ] Set up Open Graph images
- [ ] Configure structured data

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎯 Domain Configuration

### Custom Domain on Vercel
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as shown

### DNS Records
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📱 Mobile Considerations

If deploying as a PWA:

1. Create `public/manifest.json`:
```json
{
  "name": "RoofAI Analytics",
  "short_name": "RoofAI",
  "description": "AI-Powered Roofing Analytics",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. Add to `app/layout.tsx`:
```tsx
<head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#3b82f6" />
</head>
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 PID
```

### Memory Issues
Increase Node memory:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## 📈 Scaling Considerations

### Database
- Use connection pooling
- Implement caching (Redis)
- Consider read replicas
- Use database indexes

### Application
- Enable Next.js caching
- Use ISR for static pages
- Implement API rate limiting
- Consider serverless functions

### Infrastructure
- Use load balancers
- Implement auto-scaling
- Set up CDN for assets
- Use edge functions

## 💰 Cost Estimation

### Vercel (Hobby Plan)
- **Price**: Free
- **Limits**: 100GB bandwidth, 100 builds/month
- **Best for**: Development and small projects

### Vercel (Pro Plan)
- **Price**: $20/month
- **Limits**: 1TB bandwidth, unlimited builds
- **Best for**: Production with moderate traffic

### VPS (DigitalOcean)
- **Price**: $4-12/month
- **Requirements**: 1-2GB RAM, 1 CPU
- **Best for**: Full control, custom setup

## 🔗 Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Deployment](https://vercel.com/docs)
- [Docker with Next.js](https://nextjs.org/docs/deployment#docker-image)
- [PM2 Documentation](https://pm2.keymetrics.io/)

---

**Ready to Deploy?** Start with Vercel for the simplest experience!

