import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { inject } from '@vercel/analytics'

// Check if we're in development mode (Vite-specific)
const isDevelopment = import.meta.env.DEV;

// Inject Vercel Analytics with proper mode
inject({ mode: isDevelopment ? 'development' : 'production' });

// Render the React app
createRoot(document.getElementById("root")!).render(<App />);