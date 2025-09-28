# OneLot - Dealership Management System

A modern, responsive Next.js application for dealership management with car financing solutions. Built with Next.js 15, TypeScript, and Tailwind CSS.

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
cd onelot-assesment-project
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

## 🎨 Design System

### Color Palette

- **Primary**: `#44008a` - Main brand color
- **Secondary**: `#805AD5` - Purple accent
- **Accent**: `#3600D1` - Blue accent
- **Feature Colors**: Teal and Purple variants for UI elements

### Typography

- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Responsive Text**: Fluid typography using `clamp()` for smooth scaling

### Components

- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessible**: Semantic HTML and proper ARIA labels
- **Reusable**: Modular component architecture

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

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)
- **Image Optimization**: Next.js Image component

## 📱 Responsive Breakpoints

- **xs**: 475px (Extra small devices)
- **sm**: 640px (Small devices)
- **md**: 820px (Medium devices)
- **lg**: 1024px (Large devices)
- **xl**: 1280px (Extra large devices)
- **2xl**: 1536px (2X large devices)

## 🎯 Key Features

### Home Page Sections

1. **Hero Section**: Main landing area with call-to-action
2. **Features Section**: Key business features with icons
3. **Product Showcase**: Dealership management and car financing apps
4. **Why OneLot**: Five key benefits in card layout
5. **Testimonials**: Customer feedback carousel
6. **Stay Connected**: Social media integration
7. **FAQ Section**: Frequently asked questions with accordion
8. **Get Started**: Final call-to-action

### Navigation

- **Responsive Navbar**: Mobile hamburger menu, desktop navigation
- **Footer**: Links, language selector, social media icons

## 🔧 Development

### Code Formatting

- **Prettier**: Automatic code formatting on save
- **ESLint**: Code linting with Prettier integration
- **EditorConfig**: Consistent editor settings across team
- **VS Code**: Configured for automatic formatting

### Styling Guidelines

- Use global color classes from `globals.css`
- Follow mobile-first responsive design
- Use semantic HTML elements
- Maintain consistent spacing with Tailwind utilities

### Error Handling

- Route-level error boundaries (`error.tsx`)
- Global error boundary (`global-error.tsx`)
- Custom 404 page (`not-found.tsx`)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git
- **Docker**: Use provided Dockerfile

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ using Next.js and TypeScript**
