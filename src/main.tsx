import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

window.addEventListener('error', e => {
  console.error('Global error:', e.error);
  document.body.innerHTML = `
    <div style="padding: 20px; background: #fee; color: #c00;">
      <h1>Error: ${e.message}</h1>
      <pre>${e.error?.stack || 'No stack trace'}</pre>
    </div>
  `;
});

window.addEventListener('unhandledrejection', e => {
  console.error('Unhandled promise rejection:', e.reason);
  alert(`Promise rejection: ${e.reason}`);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
