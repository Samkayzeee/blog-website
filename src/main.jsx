import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Dash_board = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Signup = React.lazy(() => import('./pages/account/signup/Signup'));
const Login = React.lazy(() => import('./pages/account/login/Login'));
const Home = React.lazy(() => import('./pages/home/Home'));

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