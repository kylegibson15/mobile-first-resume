import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Initialize theme from stored preference or system preference
const stored = localStorage.getItem('portfolio-theme');
if (stored) {
  const parsed = JSON.parse(stored);
  document.documentElement.classList.toggle('dark', parsed.state?.theme === 'dark');
  document.documentElement.classList.toggle('light', parsed.state?.theme === 'light');
} else {
  document.documentElement.classList.add('dark');
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
