# texastwistersgym.com

[![tests](https://github.com/austintoddj/texastwisters/actions/workflows/tests.yml/badge.svg)](https://github.com/austintoddj/texastwisters/actions/workflows/tests.yml)

## Introduction

The texastwistersgym.com site is a [Next.js](https://nextjs.org) scaffolded project hosted on [Vercel](https://vercel.com).

## System Requirements

- Node >= 22.14
- NPM >= 11.1

## Developing

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your actual values
npm run dev # dev server at http://localhost:3000
```

### Environment Variables

This project requires several environment variables to be configured. Copy `.env.example` to `.env.local` and fill in the required values:

- `NEXT_PUBLIC_DOMAIN_URL`: Your domain name (e.g., texastwistersgym.com)
- `SENDGRID_API_KEY`: Your SendGrid API key for email functionality
- `SENDGRID_FROM_EMAIL`: Verified sender email in SendGrid
- `SENDGRID_TO_EMAIL`: Email address to receive contact form submissions

For production deployment on Vercel, set these variables in your Vercel project settings.

## License

This project is not licensed under an open-source license and is the intellectual property of Texas Twisters Gymnastics, LLC. The source is available only as an educational resource and to accept fixes for minor mistakes.
