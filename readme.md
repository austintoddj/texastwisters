# Texas Twisters Gymnastics

[![tests](https://github.com/austintoddj/texastwisters/actions/workflows/tests.yml/badge.svg)](https://github.com/austintoddj/texastwisters/actions/workflows/tests.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)

> The official website for Texas Twisters Gymnastics in Georgetown, TX

## 📖 About

This is the source code for [texastwistersgym.com](https://texastwistersgym.com), a modern web application built with Next.js and React. The site provides information about Texas Twisters Gymnastics programs, staff, events, and allows visitors to contact the gym.

**Texas Twisters Gymnastics** offers:
- Recreational gymnastics programs
- Competitive team training
- Adult gymnastics classes
- Preschool programs
- Tumbling classes
- Open gyms, birthday parties, and camps

## ✨ Features

- 🎨 **Modern UI/UX**: Built with Tailwind CSS and HeadlessUI for a polished, responsive design
- 📱 **Mobile-First**: Fully responsive design that works seamlessly on all devices
- ⚡ **Fast Performance**: Optimized with Next.js 16 App Router and Vercel Speed Insights
- 📊 **Analytics**: Integrated Vercel Analytics for tracking user engagement
- 📧 **Contact Form**: SendGrid-powered email notifications for contact inquiries
- 🔍 **SEO Optimized**: Built-in sitemap generation and metadata management
- ♿ **Accessibility**: Designed with accessibility best practices
- 📝 **Content Management**: Markdown-based content for programs, policies, FAQs, and more
- 🧪 **Well-Tested**: Comprehensive unit and E2E test coverage

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[HeadlessUI](https://headlessui.com/)** - Unstyled, accessible UI components
- **[Tabler Icons](https://tabler-icons.io/)** - Beautiful icon set

### Data & Content
- **[Gray Matter](https://github.com/jonschlinkert/gray-matter)** - Frontmatter parser
- **[Marked](https://marked.js.org/)** - Markdown parser
- **[Zod](https://zod.dev/)** - Schema validation

### Email & Analytics
- **[SendGrid](https://sendgrid.com/)** - Email delivery service
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics
- **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)** - Performance monitoring

### Testing
- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[Playwright](https://playwright.dev/)** - E2E testing framework
- **[Testing Library](https://testing-library.com/)** - React testing utilities

### Developer Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript](https://www.typescriptlang.org/)** - Type checking

## 📁 Project Structure

```
texastwisters/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page and form
│   │   ├── parents/      # Parent resources
│   │   ├── policies/     # Gym policies
│   │   ├── programs/     # Program pages
│   │   └── page.jsx      # Home page
│   ├── components/       # Reusable React components
│   ├── data/            # Markdown content files
│   │   ├── events/      # Event information
│   │   ├── faqs/        # Frequently asked questions
│   │   ├── newsletters/ # Newsletter archives
│   │   ├── policies/    # Policy documents
│   │   ├── programs/    # Program descriptions
│   │   ├── staff/       # Staff profiles
│   │   └── testimonials/# Customer testimonials
│   ├── lib/             # Utility libraries
│   ├── pages/           # API routes
│   ├── styles/          # Global styles
│   └── utils/           # Helper functions
├── public/              # Static assets
│   └── images/          # Image files
├── tests/               # Test files
│   ├── e2e/            # End-to-end tests
│   └── unit/           # Unit tests
└── ...config files      # Configuration files
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** >= 22.14 ([Download](https://nodejs.org/))
- **NPM** >= 11.1 (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/austintoddj/texastwisters.git
   cd texastwisters
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure the following variables:
   ```env
   NEXT_PUBLIC_DOMAIN_URL=texastwistersgym.com
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   SENDGRID_FROM_EMAIL=noreply@texastwistersgym.com
   SENDGRID_TO_EMAIL=info@texastwistersgym.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Run Unit Tests
```bash
npm run test:unit
```

### Run E2E Tests
```bash
# Run tests against running development server
npm run test:e2e

# Start dev server and run E2E tests (CI mode)
npm run test:e2e:ci
```

### Run All Tests
```bash
npm run test:unit && npm run test:e2e:ci
```

## 🔍 Code Quality

### Linting
```bash
npm run lint
```

### Formatting
```bash
npm run format
```

### Type Checking
```bash
npm run typecheck
```

## 🏗️ Building for Production

### Build the Application
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

The production build includes:
- Optimized bundles with code splitting
- Image optimization with Next.js Image component
- Automatic sitemap generation (via `next-sitemap`)
- Static page generation where applicable

## 🚢 Deployment

This project is configured for deployment on [Vercel](https://vercel.com), the platform created by the makers of Next.js.

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables
   - Deploy!

Vercel will automatically:
- Deploy on every push to `main` branch
- Generate preview URLs for pull requests
- Enable analytics and speed insights
- Configure custom domains

### Environment Variables on Vercel

Make sure to set these environment variables in your Vercel project settings:
- `NEXT_PUBLIC_DOMAIN_URL`
- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`
- `SENDGRID_TO_EMAIL`

## 🤝 Contributing

This project is the intellectual property of Texas Twisters Gymnastics, LLC. The source code is available as an educational resource and for accepting fixes for minor issues.

If you find a bug or have a suggestion:
1. Open an issue describing the problem or enhancement
2. If submitting a fix, create a pull request with:
   - Clear description of the change
   - Tests covering the change
   - Updated documentation if needed

### Development Workflow

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Run tests: `npm run test:unit && npm run test:e2e:ci`
4. Run linter: `npm run lint`
5. Format code: `npm run format`
6. Commit your changes: `git commit -m "Add my feature"`
7. Push to branch: `git push origin feature/my-feature`
8. Open a Pull Request

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run test:unit` | Run unit tests with Vitest |
| `npm run test:e2e` | Run E2E tests with Playwright |
| `npm run test:e2e:ci` | Start server and run E2E tests |
| `npm run lint` | Run ESLint on all files |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Check TypeScript types |

## 🐛 Troubleshooting

### Port 3000 is already in use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Node version mismatch

```bash
# Check your Node version
node --version

# Use nvm to switch versions
nvm install 22.14
nvm use 22.14
```

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails on Vercel

- Verify all environment variables are set in Vercel project settings
- Check that your Node version in Vercel matches system requirements
- Review build logs for specific error messages

## 📄 License

This project is not licensed under an open-source license and is the intellectual property of Texas Twisters Gymnastics, LLC. The source is available only as an educational resource and to accept fixes for minor mistakes.

## 📧 Contact

For questions about the gym or programs, visit [texastwistersgym.com/contact](https://texastwistersgym.com/contact) or call the gym directly.

For technical issues with this repository, please open an issue on GitHub.

---

**Built with ❤️ for Texas Twisters Gymnastics in Georgetown, TX**
