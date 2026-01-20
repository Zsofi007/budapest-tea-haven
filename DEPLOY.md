# Deploying to GitHub Pages

## Setup Instructions

1. **Make sure your repository is pushed to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Configure the base path** (if needed):
   - If your repository is `username.github.io` (user/organization page), the base is already set to `/`
   - If your repository is `username.github.io/repo-name` (project page), update `vite.config.ts`:
     ```typescript
     base: "/repo-name/",
     ```
     Or set it via environment variable:
     ```bash
     GITHUB_PAGES_BASE=/repo-name/ npm run deploy
     ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This will:
   - Build your project
   - Deploy the `dist` folder to the `gh-pages` branch
   - Make it available at `https://username.github.io` or `https://username.github.io/repo-name`

4. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: **gh-pages**
   - Select folder: **/ (root)**
   - Click **Save**

5. **Wait a few minutes** for GitHub to build and deploy your site.

## Important Notes

- The `404.html` file handles client-side routing for React Router
- After deployment, your site will be available at the GitHub Pages URL
- Any changes require running `npm run deploy` again
- The `gh-pages` branch is automatically created and updated by the deploy script

## Troubleshooting

- **404 errors on routes**: Make sure `404.html` is in the `public` folder and gets copied to `dist`
- **Assets not loading**: Check that the `base` path in `vite.config.ts` matches your repository structure
- **Routing issues**: The `404.html` redirect script should handle this automatically
