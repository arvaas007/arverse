# ARVAAS JOURNAL - Replicated Website

This is a Next.js replication of the Arvaas Journal website, designed to be deployed to a free domain.

## Project Structure

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## How to Deploy (Free Domain)

To get your free domain (e.g., `arvaas-journal.vercel.app`), follow these steps:

### Option 1: Vercel (Recommended)

1.  **Push to GitHub**:
    - Initialize a git repository in this folder: `git init`
    - Add files: `git add .`
    - Commit: `git commit -m "Initial commit"`
    - Create a new repository on GitHub and push this code there.

2.  **Deploy on Vercel**:
    - Go to [Vercel.com](https://vercel.com) and sign up/login.
    - Click "Add New..." -> "Project".
    - Import your GitHub repository.
    - Click "Deploy".
    - Vercel will automatically detect that it's a Next.js app and build it.
    - Once finished, you will get a URL like `https://your-repo-name.vercel.app`.

### Option 2: Netlify

1.  Similarly, push your code to GitHub.
2.  Go to Netlify, "Add new site" -> "Import an existing project".
3.  Connect GitHub and pick your repository.
4.  Deploy.

## Local Development

If you install Node.js in the future, you can run this locally:

1.  `npm install`
2.  `npm run dev`
3.  Open `http://localhost:3000`
