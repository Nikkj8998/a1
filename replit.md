# Vite React ShadCN TS

## Overview
This is a React + TypeScript web application built with Vite, using Tailwind CSS for styling and shadcn/ui for UI components. It appears to be a website for an agricultural/rural development organization.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with tailwindcss-animate
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation

## Project Structure
```
├── public/           # Static assets (images, robots.txt)
├── src/
│   ├── assets/       # Image assets
│   ├── components/   # React components
│   │   └── ui/       # shadcn/ui components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── package.json      # Dependencies
├── vite.config.ts    # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json     # TypeScript configuration
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Configuration
- Vite dev server configured to use host `0.0.0.0` and port `5000`
- All hosts allowed for Replit proxy compatibility

## Deployment
Configured for autoscale deployment with:
- Build command: `npm run build`
- Run command: `npm run preview`
