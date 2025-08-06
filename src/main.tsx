import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { inject } from '@vercel/analytics'

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

// Inject Vercel Analytics
inject({ mode: isDevelopment ? 'development' : 'production' });

createRoot(document.getElementById("root")!).render(<App />);
