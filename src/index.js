import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// App bileşeni yazdığımız kodların html'in hangi kısmına ekrana basıcağını belirler.
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

