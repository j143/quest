# Deploying Comment Interested to GitHub Pages

This guide will walk you through deploying your Comment Interested web application to GitHub Pages for free hosting.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your Comment Interested project files

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "comment-interested" or "linkedin-search-tips")
4. Make sure it's set to "Public" (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

## Step 2: Prepare Your Project

1. Download all your project files to a local folder
2. Open a terminal/command prompt and navigate to your project folder
3. Initialize git and add your files:

```bash
git init
git add .
git commit -m "Initial commit: Comment Interested web app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 3: Set up GitHub Pages with GitHub Actions

1. In your GitHub repository, go to **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Create a new file in your repository at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: |
        npm install vite @vitejs/plugin-react
        npm install react react-dom
        npm install @types/react @types/react-dom
        npm install typescript
        npm install tailwindcss @tailwindcss/typography
        npm install lucide-react
        npm install motion
        npm install class-variance-authority clsx tailwind-merge
        npm install @radix-ui/react-accordion
        npm install @radix-ui/react-alert-dialog
        npm install @radix-ui/react-avatar
        npm install @radix-ui/react-checkbox
        npm install @radix-ui/react-collapsible
        npm install @radix-ui/react-dialog
        npm install @radix-ui/react-dropdown-menu
        npm install @radix-ui/react-hover-card
        npm install @radix-ui/react-label
        npm install @radix-ui/react-menubar
        npm install @radix-ui/react-navigation-menu
        npm install @radix-ui/react-popover
        npm install @radix-ui/react-progress
        npm install @radix-ui/react-radio-group
        npm install @radix-ui/react-scroll-area
        npm install @radix-ui/react-select
        npm install @radix-ui/react-separator
        npm install @radix-ui/react-slider
        npm install @radix-ui/react-switch
        npm install @radix-ui/react-tabs
        npm install @radix-ui/react-toggle
        npm install @radix-ui/react-toggle-group
        npm install @radix-ui/react-tooltip

    - name: Create package.json
      run: |
        cat > package.json << 'EOF'
        {
          "name": "comment-interested",
          "version": "1.0.0",
          "type": "module",
          "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
          },
          "dependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
          },
          "devDependencies": {
            "@types/react": "^18.2.0",
            "@types/react-dom": "^18.2.0",
            "@vitejs/plugin-react": "^4.0.0",
            "typescript": "^5.0.0",
            "vite": "^4.0.0"
          }
        }
        EOF

    - name: Create vite.config.js
      run: |
        cat > vite.config.js << 'EOF'
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        export default defineConfig({
          plugins: [react()],
          base: process.env.GITHUB_ACTIONS ? '/${{ github.event.repository.name }}/' : '/',
          build: {
            outDir: 'dist',
            assetsDir: 'assets',
            sourcemap: false
          }
        })
        EOF

    - name: Create index.html
      run: |
        cat > index.html << 'EOF'
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Comment Interested - LinkedIn Search Mastery</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>
        EOF

    - name: Create src/main.tsx
      run: |
        mkdir -p src
        cat > src/main.tsx << 'EOF'
        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import App from './App'
        import './index.css'

        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        )
        EOF

    - name: Move App.tsx to src
      run: |
        mv App.tsx src/
        mv components src/
        mv styles src/

    - name: Create src/index.css
      run: |
        cat > src/index.css << 'EOF'
        @import 'styles/globals.css';
        EOF

    - name: Update imports in components
      run: |
        find src/components -name "*.tsx" -exec sed -i 's|"./components/|"../components/|g' {} \;
        find src/components -name "*.tsx" -exec sed -i 's|from "./|from "../|g' {} \;

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

4. Commit and push this file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

## Step 4: Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", it should show "GitHub Actions" (if you followed step 3)
4. The action will run automatically on your next push

## Step 5: Access Your Deployed Site

1. After the GitHub Action completes (check the "Actions" tab), your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

2. You can find the exact URL in your repository settings under "Pages"

## Alternative: Simple Deployment with Vite

If the GitHub Actions approach seems complex, you can use a simpler method:

1. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

3. Deploy:
```bash
npm run deploy
```

## Updating Your Site

To update your deployed site:

1. Make changes to your code
2. Commit and push to the main branch:
```bash
git add .
git commit -m "Update site"
git push
```

3. GitHub Actions will automatically rebuild and deploy your changes

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the settings in your repository's Pages section

## Troubleshooting

- **Action fails**: Check the "Actions" tab for detailed error logs
- **Site not loading**: Ensure your repository is public and Pages is enabled
- **Broken links**: Check that all import paths are relative and correct
- **Missing styles**: Ensure Tailwind CSS is properly configured

Your Comment Interested app should now be live and accessible to anyone with the link!