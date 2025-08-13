# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## 📋 Prerequisites

1. **GitHub Account** - Create one at [github.com](https://github.com)
2. **Git** - Install from [git-scm.com](https://git-scm.com)
3. **Your Portfolio Files** - All the files in this folder

## 🔧 Step-by-Step Deployment

### 1. Create a New GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `portfolio` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have one)
6. Click **"Create repository"**

### 2. Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all your portfolio files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
   - `assets/` folder (if you have images)
3. Add a commit message: `"Initial portfolio upload"`
4. Click **"Commit changes"**

#### Option B: Using Git Commands (Advanced)

```bash
# Navigate to your portfolio folder
cd "path/to/your/portfolio"

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio upload"

# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (in the left sidebar)
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select **"main"** branch
6. Select **"/ (root)"** folder
7. Click **"Save"**

### 4. Your Site is Live! 🎉

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/portfolio
```

**Note**: It may take a few minutes for the site to go live.

## 🔄 Updating Your Site

### Using GitHub Web Interface:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Commit changes

### Using Git Commands:
```bash
# Make your changes locally
# Then push to GitHub
git add .
git commit -m "Update portfolio"
git push
```

## 🛠️ Troubleshooting

### Site Not Loading?
- Check if GitHub Pages is enabled in Settings
- Wait 5-10 minutes for initial deployment
- Check the Actions tab for deployment status

### Images Not Showing?
- Make sure image paths are relative (not absolute)
- Check if images are uploaded to the repository
- Verify file names match exactly (case-sensitive)

### Contact Form Not Working?
- EmailJS requires HTTPS (GitHub Pages provides this)
- Check browser console for errors
- Verify EmailJS configuration

### Styling Issues?
- Clear browser cache
- Check if all CSS files are uploaded
- Verify Tailwind CSS CDN is loading

## 🌐 Custom Domain (Optional)

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. In GitHub repository Settings → Pages
3. Add your custom domain
4. Update DNS settings with your domain provider

## 📱 Testing Your Live Site

1. **Desktop**: Test on different browsers
2. **Mobile**: Test responsive design
3. **Contact Form**: Send a test message
4. **Links**: Verify all links work
5. **Images**: Check if all images load

## 🎯 Best Practices

- **Keep repository public** for free hosting
- **Use descriptive commit messages**
- **Test locally before pushing**
- **Regular updates** keep your portfolio fresh
- **Backup your files** locally

## 📞 Need Help?

- **GitHub Pages Documentation**: [pages.github.com](https://pages.github.com)
- **GitHub Support**: [support.github.com](https://support.github.com)
- **EmailJS Support**: [emailjs.com](https://www.emailjs.com)

---

**Your portfolio is now live and professional! 🚀** 