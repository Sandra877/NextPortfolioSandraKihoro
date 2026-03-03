# Sandra Kihoro Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all screen sizes
- **Dynamic Experience Pages**: Experience data stored as markdown files with YAML frontmatter
- **Contact Form**: Functional contact form with email delivery via Nodemailer
- **Animations**: Smooth entrance animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the codebase

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NextPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment example file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact form API endpoint
│   ├── experiences/        # Dynamic experience pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── not-found.tsx     # 404 page
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ExperienceGrid.tsx
│   ├── ExperienceCard.tsx
│   ├── ExperienceDetail.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── data/experiences/      # Experience markdown files
│   ├── kicd-software-development-intern.md
│   ├── aws-cloud-support-intern.md
│   ├── teach2give-qa-engineer-trainee.md
│   └── africa-cloud-space-qa-engineer.md
├── lib/                   # Utility functions
│   └── experiences.ts     # Experience data loader
├── public/
│   ├── images/            # Profile images
│   └── logos/             # Company logos
├── types/                 # TypeScript types
│   └── experience.ts
└── ...config files
```

## Adding Your Profile Photo

1. Place your animated photo in `/public/images/`
2. Supported formats: `.gif`, `.webm`, `.mp4`, `.avif`
3. Recommended filename: `profile-animated.gif`

The Hero component will automatically handle the animation and fallback display.

## Adding Company Logos

1. Place company logo files in `/public/logos/`
2. Recommended format: SVG (scalable)
3. Filename convention: lowercase, hyphenated (e.g., `kenya-institute-of-curriculum-development.svg`)

The system automatically generates logo paths based on company names from the experience data.

## Managing Experience Data

Experience data is stored in `/data/experiences/` as markdown files with YAML frontmatter.

### Frontmatter Fields

```yaml
---
title: "Job Title"
role: "Role at Company"
company: "Company Name"
timeframe: "2023 - Present"
location: "Nairobi, Kenya"
slug: "unique-slug"
metaTitle: "SEO Title"
metaDescription: "SEO Description"
tags: ["React", "Node.js"]
summary: "Brief summary"
responsibilities:
  - Responsibility 1
  - Responsibility 2
keyAchievements:
  - Achievement 1
  - Achievement 2
techStack: ["Tech1", "Tech2"]
notableProjects:
  - title: "Project Name"
    description: "Description"
    link: "https://..."
suggestedImageAlt: "Image alt text"
relatedResumeSections: ["Section1"]
supervisor:
  name: "Supervisor Name"
  role: "Supervisor Role"
  email: "supervisor@email.com"
  phone: "+254..."
---
```

### Adding a New Experience

1. Create a new `.md` file in `/data/experiences/`
2. Add the frontmatter with all required fields
3. Add content below the frontmatter
4. The page will be automatically generated at `/experiences/your-slug`

## Setting Up SMTP

The contact form uses Nodemailer to send emails. You need to configure SMTP credentials.

### Option 1: Gmail

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account → Security → App passwords
3. Create a new app password
4. Update your `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Option 2: SendGrid

1. Create a SendGrid account
2. Create an API key with "Mail Send" permissions
3. Update your `.env.local`:
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Option 3: AWS SES

1. Set up AWS SES and get SMTP credentials
2. Update your `.env.local`:
```
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

### Testing the Contact Form

After configuring SMTP, test the form:

```bash
# Test with curl
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","question":"Hello, this is a test message!"}'
```

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `TO_EMAIL`
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## License

MIT
