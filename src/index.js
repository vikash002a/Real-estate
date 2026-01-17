import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Tailwind CSS base styles को इंपोर्ट करना आवश्यक है
import './index.css'; 

// उस रूट एलिमेंट को प्राप्त करना जहाँ React को रेंडर करना है
const rootElement = document.getElementById('root');

if (rootElement) {
  // React 18 का नया रूट API
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      {/* App कंपोनेंट को रेंडर करना */}
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found in the document.");
}