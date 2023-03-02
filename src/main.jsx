import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ThemeProvider from './contexts/ThemeProvider';
import Loading from './components/loading/Loading';


const Dash_board = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Signup = React.lazy(() => import('./pages/account/signup/Signup'));
const Login = React.lazy(() => import('./pages/account/login/Login'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const Error404Page = React.lazy(() => import('./pages/error/404'));
const DetailsPage = React.lazy(() => import('./pages/details/Details'));


const router = createBrowserRouter([
  {path:'/', element : <Home />, errorElement:<Error404Page />},
  {path:'/signup', element: <Signup />},
  {path:'/login', element: <Login />},
  {path:'/dashboard', element: <Dash_board />},
  {path:'/contact', element: <Contact />},
  {path:'/details/:id', element: <DetailsPage />}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeProvider>
        <Suspense fallback={ <Loading /> } >
            <RouterProvider router={router} /> 
        </Suspense>
     </ThemeProvider>
  </React.StrictMode>
)
