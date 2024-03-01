import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  About,
  CarpetCleaning,
  CommercialCleaning,
  Contact,
  DomesticCleaning,
  EndOFLeaseC,
  Home,
  IndustrialCleaning,
  OnceOffCleaning,
  PressureWashing,
  Service,
  SpringCleaning,
  TileAndGrout,
  WindowCleaning,
} from './pages/index.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Service />}>
        <Route path="/services" element={<DomesticCleaning />} />
        <Route
          path="/services/domestic-cleaning"
          element={<DomesticCleaning />}
        />
        <Route
          path="/services/commercial-cleaning"
          element={<CommercialCleaning />}
        />
        <Route
          path="/services/end-of-lease-cleaning"
          element={<EndOFLeaseC />}
        />
        <Route path="/services/spring-cleaning" element={<SpringCleaning />} />
        <Route path="/services/windows-cleaning" element={<WindowCleaning />} />
        <Route
          path="/services/steam-carpet-cleaning"
          element={<CarpetCleaning />}
        />
        <Route
          path="/services/once-off-cleaning"
          element={<OnceOffCleaning />}
        />
        <Route
          path="/services/pressure-washing"
          element={<PressureWashing />}
        />
        <Route
          path="/services/tile-and-grout-cleaning"
          element={<TileAndGrout />}
        />
        <Route
          path="/services/industrial-cleaning"
          element={<IndustrialCleaning />}
        />
      </Route>

      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
