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
  Client,
  CommercialCleaning,
  Contact,
  DomesticCleaning,
  EndOFLeaseC,
  Home,
  Service,
  Testimonial,
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
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/clients" element={<Client />} />
      <Route path="/testimonials" element={<Testimonial />} />
      <Route path="/get-a-quote" element={<Contact />} />
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
