import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found.');
}

const initialPath = window.location.pathname;

if (root.hasChildNodes() && root.innerHTML.trim().length > 0) {
  try {
    hydrateRoot(root, <App initialPath={initialPath} />, {
      onRecoverableError(error) {
        console.warn('[ENGVERO HYDRATION RECOVERED]', error);
      },
    });
  } catch {
    createRoot(root).render(<App initialPath={initialPath} />);
  }
} else {
  createRoot(root).render(<App initialPath={initialPath} />);
}
