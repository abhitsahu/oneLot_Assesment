# OneLot

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Clean, professional interface with consistent design system
- **Performance Optimized**: Static Site Generation (SSG) for optimal loading
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable, maintainable components
- **Error Handling**: Built-in error boundaries and 404 pages
- **Global Color System**: Centralized color management with CSS custom properties

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd onelot-assesment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
```

### 5. Run Linting

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and color system
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── error.tsx          # Error boundary
│   ├── global-error.tsx   # Global error boundary
│   └── not-found.tsx      # 404 page
├── components/
│   ├── sections/home/     # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ProductShowcaseSection.tsx
│   │   ├── WhyOneLotSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── StayConnectedSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── GetStartedSection.tsx
│   ├── shared/            # Shared components
│   │   ├── navbar/
│   │   └── footer/
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── SocialMediaCard.tsx
│       └── LoadingSkeleton.tsx
├── constants/             # Static data
│   ├── constants.json
│   └── index.ts
└── styles/               # Additional styles
```



## 🚀 Available Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start development server            |
| `npm run build`        | Build for production                |
| `npm run start`        | Start production server             |
| `npm run lint`         | Run ESLint                          |
| `npm run lint:fix`     | Fix ESLint errors automatically     |
| `npm run format`       | Format code with Prettier           |
| `npm run format:check` | Check if code is formatted          |
| `npm run check`        | Run both linting and format checks  |
| `npm run fix`          | Fix both ESLint and Prettier issues |

### Error Handling

- Route-level error boundaries (`error.tsx`)
- Global error boundary (`global-error.tsx`)
- Custom 404 page (`not-found.tsx`)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically
