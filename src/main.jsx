import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Dash_board = React.lazy(() => import('./pages/Dashboard'));

const router = createBrowserRouter([
  {path:'/', element : <Home />},
  {path:'/signup', element: <Signup />},
  {path:'/login', element: <Login />},
  {path:'/dashboard', element: <Dash_board />}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
  </React.StrictMode>
)
