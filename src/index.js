import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globalstyles from './Globalstyles';
import MouseContextProvider from "./context/mouseContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <Globalstyles />
      <App />
    </MouseContextProvider>
  </React.StrictMode>
);


