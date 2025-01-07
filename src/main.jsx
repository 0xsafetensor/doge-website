import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0";
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
