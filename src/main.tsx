
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found.');
}

const initialPath = window.location.pathname;

if (root.hasChildNodes()) {
  hydrateRoot(root, <App initialPath={initialPath} />);
} else {
  createRoot(root).render(<App initialPath={initialPath} />);
}
