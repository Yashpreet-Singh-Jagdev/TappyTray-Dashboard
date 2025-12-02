import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Buy from './pages/Buy.jsx';
// import Performance from './pages/Performance.jsx';
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buy" element={<Buy />} />
        {/* <Route path="/performance" element={<Performance />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
