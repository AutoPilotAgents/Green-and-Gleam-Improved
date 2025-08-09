# AI Rules for Green & Gleam Website

## Tech Stack Overview
- **React 18.3.1** with TypeScript for component-based UI development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom design tokens for styling and responsive design
- **shadcn/ui** component library for consistent, accessible UI components
- **React Router** for client-side routing and navigation
- **Lucide React** for clean, consistent iconography
- **Framer Motion** (via CSS animations) for scroll-based animations and micro-interactions
- **React Query** for data fetching and state management
- **Sonner & Toast** for user notifications and feedback

## Library Usage Rules

### Styling & UI Components
- **Use Tailwind CSS classes** for all styling - never write custom CSS
- **Use shadcn/ui components** as the primary source for buttons, cards, forms, dialogs, etc.
- **Extend shadcn/ui components** by creating wrapper components when customization is needed
- **Use the custom color palette** defined in tailwind.config.ts (primary-forest, primary-emerald, primary-lime, accent-mint)

### Icons & Graphics
- **Use Lucide React icons** exclusively - no other icon libraries
- **Import icons directly** from 'lucide-react' rather than using icon components
- **Use consistent sizing** (w-4 h-4, w-5 h-5, w-6 h-6, w-8 h-8) throughout the application

### Animations & Interactions
- **Use CSS animations** defined in tailwind.config.ts for scroll-based animations
- **Use the useScrollAnimation hook** for triggering animations on scroll
- **Avoid JavaScript-heavy animations** - prefer CSS transforms and transitions
- **Keep animations subtle** - use bounce-gentle, float, and wiggle for micro-interactions

### Layout & Structure
- **Use container mx-auto px-4** for consistent page padding
- **Use grid and flexbox** for responsive layouts
- **Follow the section-based structure** (Hero, Services, About, Contact, Footer)
- **Use semantic HTML** elements (section, header, footer, nav) appropriately

### Forms & User Input
- **Use shadcn/ui form components** (Input, Button, Select, etc.) for all user interactions
- **Use React Hook Form** with Zod validation for form handling
- **Use the RippleButton component** for enhanced button interactions
- **Provide clear visual feedback** for all interactive elements

### Images & Assets
- **Use the /src/assets folder** for all images and static assets
- **Optimize images** before adding to the project
- **Use descriptive alt text** for all images for accessibility
- **Use responsive image techniques** (object-cover, aspect-ratio) for consistent display

### Navigation & Routing
- **Use React Router** for all navigation between pages
- **Use smooth scrolling** for anchor links within the same page
- **Maintain the existing route structure** (Index as home, NotFound for 404s)
- **Use the Header component** for primary navigation

### State Management
- **Use React Query** for server state management and caching
- **Use React hooks** (useState, useEffect) for local component state
- **Avoid complex state management** - keep state as local as possible
- **Use custom hooks** (like useScrollAnimation) for reusable logic

### Performance & Best Practices
- **Use lazy loading** for images and components when appropriate
- **Implement proper error boundaries** for graceful error handling
- **Use semantic HTML** and ARIA attributes for accessibility
- **Optimize for mobile-first** responsive design
- **Keep components small and focused** - single responsibility principle