# 🚀 Deployment Guide - Vercel via GitHub

## Prerequisites
- GitHub account
- Vercel account (free - sign up at vercel.com)
- Git installed on your computer

---

## Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: RoofAI Analytics - AI-Powered Roofing Platform"
```

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `roofai-analytics` (or your preferred name)
3. Description: "AI-Powered Analytics Platform for Roofing Companies"
4. Keep it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Option B: Using GitHub CLI (if installed)
```bash
gh repo create roofai-analytics --public --source=. --remote=origin
```

---

## Step 3: Push to GitHub

Copy the commands from your new GitHub repository page, or use:

```bash
git remote add origin https://github.com/YOUR_USERNAME/roofai-analytics.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 4: Deploy to Vercel

### Method 1: Vercel Website (Easiest)

1. **Go to Vercel**: Visit https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New..."** → Select "Project"
4. **Import your repository**:
   - You'll see a list of your GitHub repos
   - Find "roofai-analytics" and click "Import"
5. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
6. **Click "Deploy"**

**That's it!** ✨ Vercel will build and deploy your app in ~2 minutes.

### Method 2: Vercel CLI

Install Vercel CLI:
```bash
npm install -g vercel
```

Deploy:
```bash
vercel
```

Follow the prompts and your app will be deployed!

---

## Step 5: Access Your Deployed App

After deployment completes, Vercel will provide:
- **Production URL**: `https://roofai-analytics.vercel.app`
- **Preview URLs**: Every git push creates a preview deployment
- **Dashboard**: Manage your deployments at https://vercel.com/dashboard

---

## 🎉 Automatic Deployments

From now on, **every time you push to GitHub**:
- ✅ Vercel automatically builds and deploys
- ✅ Main branch → Production deployment
- ✅ Other branches → Preview deployments
- ✅ Pull requests → Preview deployments with comments

---

## Configuration Files Created

### `vercel.json`
- Framework configuration
- Security headers
- Region settings (US East)

### `.gitignore`
- Prevents committing node_modules
- Ignores build files and secrets

### `.env.example`
- Template for environment variables
- Copy to `.env.local` for local development

---

## Custom Domain (Optional)

To use your own domain:

1. Go to your Vercel project
2. Click "Settings" → "Domains"
3. Add your domain
4. Update your domain's DNS records as shown
5. Vercel automatically provides SSL certificate

---

## Environment Variables

If you need to add environment variables:

1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add your variables:
   - `NEXT_PUBLIC_API_URL`
   - `DATABASE_URL`
   - etc.
4. Redeploy for changes to take effect

---

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Ensure `npm run build` works locally

### 404 Errors
- Clear Vercel cache and redeploy
- Check route files are properly named

### Environment Variables Not Working
- Prefix public variables with `NEXT_PUBLIC_`
- Redeploy after adding env vars

---

## Useful Commands

```bash
# Update your deployment
git add .
git commit -m "Your update message"
git push origin main

# View deployment logs
vercel logs

# View domains
vercel domains

# Pull environment variables
vercel env pull
```

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com

---

## 🎊 Congratulations!

Your RoofAI Analytics platform is now live on the internet! 🌐

**Share your deployment URL with clients and team members!**

---

*Deployed with ❤️ using Vercel and Next.js*

