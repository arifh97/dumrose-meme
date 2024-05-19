// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage';
import Home from './components/Home';
import About from './components/About';
import HowToBuy from './components/How_to_buy';
import Tokenomics from './components/Tokenomics';
import Chart from './components/Chart';
import Faq from './components/Faq';
import Contact from './components/Contact';

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/howtobuy', element: <HowToBuy /> },
      { path: '/contact', element: <Contact /> },
      { path: '/chart', element: <Chart /> },
      { path: '/faq', element: <Faq /> },
      { path: '/tokenomics', element: <Tokenomics /> },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
