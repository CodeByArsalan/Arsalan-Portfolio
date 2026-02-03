---
description: Deploy the Arsalan Portfolio to GitHub Pages
---

# Deploy to GitHub Pages

This workflow deploys your Vite + React portfolio to GitHub Pages.

## Prerequisites

- Git installed and configured
- GitHub account with a repository for this project
- Repository should be named `<username>.github.io` for user site, or any name for project site

---

## Step 1: Configure Vite for GitHub Pages

Update `vite.config.ts` to set the correct base path for GitHub Pages:

**For user site (`<username>.github.io`):**
```ts
base: '/',
```

**For project site (`<username>.github.io/<repo-name>`):**
```ts
base: '/<repo-name>/',
```

Example configuration:
```ts
export default defineConfig(({ mode }) => ({
  base: '/', // Change this to '/<repo-name>/' for project sites
  server: {
    host: "::",
    port: 8080,
  },
  // ... rest of config
}));
```

---

## Step 2: Create GitHub Actions Workflow

Create the file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 3: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the changes

---

## Step 4: Build and Test Locally (Optional)

// turbo
```powershell
npm run build
```

// turbo
```powershell
npm run preview
```

---

## Step 5: Commit and Push Changes

// turbo
```powershell
git add .
```

```powershell
git commit -m "Add GitHub Pages deployment workflow"
```

```powershell
git push origin main
```

---

## Step 6: Verify Deployment

1. Go to your GitHub repository
2. Click on **Actions** tab
3. Watch the deployment workflow run
4. Once complete, visit your site at:
   - **User site:** `https://<username>.github.io`
   - **Project site:** `https://<username>.github.io/<repo-name>`

---

## Troubleshooting

### Blank Page After Deployment
- Ensure `base` in `vite.config.ts` is set correctly
- For project sites, base should be `'/<repo-name>/'`

### 404 Errors on Routes
- For SPA routing, create a `public/404.html` that redirects to `index.html`
- Or use hash routing with React Router

### Build Failures
- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Run `npm run build` locally to test

---

## Quick Commands Reference

| Action | Command |
|--------|---------|
| Build for production | `npm run build` |
| Preview build locally | `npm run preview` |
| Push to trigger deploy | `git push origin main` |
