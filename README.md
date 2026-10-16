<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8649388a-cf94-4356-a0eb-f87ee6c63bb0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

The GitHub Actions workflow builds the site and deploys it to GitHub Pages whenever you push to the repository's default branch. It also supports manual runs from the Actions tab.

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.

For a project repository, the site is published at `https://<owner>.github.io/<repository>/`. A repository named `<owner>.github.io` is published at the domain root.
