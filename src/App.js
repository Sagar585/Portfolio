import React from 'react';
import './App.css';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Home></Home>
    ),
  },  
  {
    path: '/ContactMe',
    element: (
        <ContactMe></ContactMe>
    ),
  },  
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
