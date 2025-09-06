# TechDoc Profesional

## Overview

TechDoc Profesional is a professional technical documentation service website built for corporations seeking to outsource their documentation needs. The application serves as a business website showcasing documentation services including data sheets, user manuals, training materials, CPI documentation, and product renders. It features a contact form for inquiries, portfolio showcase, pricing information, and testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, Services, About, Portfolio, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state and React hooks for local state
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for inquiry management
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema**: Shared TypeScript schema definitions using Drizzle and Zod
- **Database**: PostgreSQL (configured but using in-memory storage for development)
- **Validation**: Zod schemas for runtime type validation on both client and server

### Development Environment
- **Build System**: Vite for frontend with hot module replacement
- **Type Checking**: TypeScript with strict mode enabled
- **Development Server**: Express server with Vite middleware integration
- **Code Organization**: Monorepo structure with client, server, and shared directories

## External Dependencies

### UI Framework Dependencies
- **@radix-ui/react-***: Complete set of accessible, unstyled UI primitives
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers

### Styling Dependencies
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Creating component variants
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

### Database and Validation
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **zod**: TypeScript-first schema validation

### Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development plugins

### Third-party Services
- **Unsplash**: External image hosting for portfolio and hero sections
- **Google Fonts**: Web font delivery (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Replit**: Development environment and hosting platform