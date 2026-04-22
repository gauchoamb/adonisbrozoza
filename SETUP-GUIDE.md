# How to Get Your Site Live on adonisbrozoza.com

A complete guide from zero to a live website. Follow each step in order.

---

## STAGE 1 — Install the tools (30 minutes, one time)

### 1.1 Install Node.js

Go to https://nodejs.org and download the **LTS** version (the big green button on the left). Run the installer, click through all the defaults.

To verify it worked, open **Terminal** (on Mac: search "Terminal" in Spotlight) or **PowerShell** (on Windows: search "PowerShell" in Start menu) and type:

```
node --version
```

You should see something like `v22.x.x`. If you see an error, restart your computer and try again.

### 1.2 Install VS Code

Go to https://code.visualstudio.com and download it. Install, open it. This is your text editor — where you'll edit your site's content.

### 1.3 Check that Git is installed

In Terminal/PowerShell, type:

```
git --version
```

**On Mac:** If it's not installed, macOS will prompt you to install Command Line Tools. Say yes and wait for it to finish.

**On Windows:** If it's not installed, go to https://git-scm.com/download/win and download the installer. Run it with all the default settings.

### 1.4 Create a GitHub account

Go to https://github.com and sign up for a free account. Pick a username you're comfortable with (it'll be visible in your repo URL, but not on your actual site).

### 1.5 Create a Vercel account

Go to https://vercel.com and click "Sign Up". Choose **"Continue with GitHub"** — this links the two accounts automatically, which is important for deployment.

---

## STAGE 2 — Set up the project on your computer (15 minutes)

### 2.1 Unzip the project

Download the `adonisbrozoza-site.zip` file I gave you. Unzip it. You'll get a folder called `adonisbrozoza`. Move it somewhere sensible — your Desktop or Documents folder is fine.

### 2.2 Open the project in VS Code

Open VS Code. Go to **File → Open Folder** and select the `adonisbrozoza` folder.

You should see the file tree on the left side:
```
adonisbrozoza/
  app/
    [locale]/
      layout.tsx
      page.tsx
      now/
        page.tsx
    globals.css
    layout.tsx
    page.tsx
  lib/
    content-en.ts
    content-pt.ts
    content.ts
    i18n.ts
  package.json
  ...
```

### 2.3 Install dependencies

In VS Code, open the built-in terminal: **Terminal → New Terminal** (or press Ctrl+` on Windows, Cmd+` on Mac).

You should see a command prompt at the bottom of the screen. Type:

```
npm install
```

Wait for it to finish (usually 30-60 seconds). You'll see a `node_modules` folder appear in your file tree — that's normal, don't touch it.

### 2.4 Preview your site locally

In the same terminal, type:

```
npm run dev
```

You'll see a message like:

```
▲ Next.js 15.0.3
- Local: http://localhost:3000
```

Open your browser and go to **http://localhost:3000**. You should see your site! Click around — try the EN/PT toggle, the Now page, the "More ›" button on the bio.

To stop the preview, go back to the terminal and press **Ctrl+C**.

---

## STAGE 3 — Put the code on GitHub (10 minutes)

### 3.1 Configure Git with your name

In the VS Code terminal, type these two commands (replace with your actual name and email):

```
git config --global user.name "Adonis Brozoza"
git config --global user.email "adonis@brozoza.com"
```

### 3.2 Create a new repository on GitHub

1. Go to https://github.com/new
2. Repository name: `adonisbrozoza`
3. Keep it **Public** (Vercel's free tier requires public repos)
4. Do NOT check any of the boxes (no README, no .gitignore, no license)
5. Click **Create repository**

GitHub will show you a page with setup instructions. You need the commands under **"…or push an existing repository from the command line"**.

### 3.3 Push your code

Back in VS Code's terminal, type these commands one at a time:

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/adonisbrozoza.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

GitHub may ask you to log in — follow the prompts. If it asks about authentication, choose "Sign in with browser" if that's an option.

After the push finishes, refresh your GitHub page. You should see all your files there.

---

## STAGE 4 — Deploy to Vercel (10 minutes)

### 4.1 Import your project

1. Go to https://vercel.com/dashboard
2. Click **"Add New..." → Project**
3. You should see your `adonisbrozoza` repo in the list. Click **Import**.
4. Vercel auto-detects it's a Next.js project. Leave all settings as default.
5. Click **Deploy**.

Wait about 60-90 seconds. When it's done, Vercel gives you a URL like:

```
https://adonisbrozoza.vercel.app
```

Open it. Your site is now live on the internet.

---

## STAGE 5 — Register your domain (15 minutes)

### 5.1 Buy the domain on Vercel

1. In Vercel, go to your project dashboard
2. Click **Settings → Domains**
3. Type `adonisbrozoza.com` in the input field and click **Add**
4. Vercel will tell you the domain isn't registered yet and offer to sell it to you
5. Click **Buy** (typically $15-20/year)
6. Follow the checkout process

### 5.2 Wait for DNS

After purchase, Vercel automatically configures everything — DNS records, SSL certificate, the works. The domain usually starts working within 5-15 minutes, though it can take up to 48 hours in rare cases.

Once it's ready, **adonisbrozoza.com** loads your site. HTTPS (the lock icon) works automatically.

---

## STAGE 6 — How to update your site going forward

### Adding or editing content

All your site's text lives in two files:
- `lib/content-en.ts` — English content
- `lib/content-pt.ts` — Portuguese content

To add a new publication, open the relevant file in VS Code and add an entry to the `publications` array:

```typescript
{
  title: 'Your New Publication Title',
  lang: 'English',
  url: 'https://where-its-published.com/your-article',
  meta: 'Journal Name, 2026',
},
```

Put it at the top of the list (before the first `{`) to have it appear first.

### Publishing changes

After editing, run these three commands in the VS Code terminal:

```
git add .
git commit -m "Added new publication"
git push
```

Vercel automatically rebuilds and deploys. Your changes go live in about 60-90 seconds.

### Editing the bio

Open `lib/content-en.ts` (or `content-pt.ts`). Find the `bio` object and edit the `short` and `extended` text.

### Updating the Now page

Open `lib/content-en.ts`. Find the `now` object and add text to the `content` field:

```typescript
now: {
  title: 'Now',
  content: 'Currently focused on AI governance research and preparing a new article on sanctions compliance architecture.',
},
```

### Adding a speaking engagement

Same pattern — find the `speaking` array and add an entry:

```typescript
{ title: 'Your Talk Title', meta: 'Venue, 2026' },
```

### Updating social links

Find the `social` array and update the URLs to your actual profile links.

---

## STAGE 7 — Troubleshooting

**"command not found: node"** — Node.js didn't install properly. Re-download from nodejs.org and restart your terminal.

**"command not found: git"** — Git isn't installed. See step 1.3.

**Build fails on Vercel** — Check the build logs in Vercel's dashboard. Common cause: a typo in one of the content files (missing comma, unclosed quote). Fix it locally, push again.

**Domain not working** — DNS can take up to 48 hours. If it's been more than that, check Vercel's Domains settings for any error messages.

**Want to preview changes before publishing** — Run `npm run dev` locally first. Check http://localhost:3000. Only push when you're happy.

---

## Quick reference

| Task | What to do |
|------|-----------|
| Add a publication | Edit `lib/content-en.ts`, add to `publications` array |
| Edit bio | Edit `lib/content-en.ts`, change `bio.short` or `bio.extended` |
| Update Now page | Edit `lib/content-en.ts`, change `now.content` |
| Add speaking gig | Edit `lib/content-en.ts`, add to `speaking` array |
| Publish changes | `git add .` → `git commit -m "message"` → `git push` |
| Preview locally | `npm run dev` → open http://localhost:3000 |

---

## Your site's file structure

```
adonisbrozoza/
│
├── app/                          # Next.js pages
│   ├── globals.css               # All styling (fonts, colors, layout)
│   ├── layout.tsx                # Root HTML wrapper
│   ├── page.tsx                  # Redirects / to /en
│   └── [locale]/                 # Language-specific pages
│       ├── layout.tsx            # Header + footer (shared)
│       ├── page.tsx              # Homepage
│       └── now/
│           └── page.tsx          # "Now" page
│
├── lib/                          # Content and config
│   ├── content-en.ts             # ← YOUR ENGLISH CONTENT (edit this)
│   ├── content-pt.ts             # ← YOUR PORTUGUESE CONTENT (edit this)
│   ├── content.ts                # Content loader
│   └── i18n.ts                   # Language config
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.mjs               # Next.js config
└── .gitignore                    # Files Git should ignore
```

The two files you'll edit 99% of the time are `lib/content-en.ts` and `lib/content-pt.ts`. Everything else is infrastructure you can mostly forget about.
