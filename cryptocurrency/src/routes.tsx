import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Analytics from './pages/Analytics';
import BuySell from './pages/BuySell';
import WhyUs from './pages/WhyUs';
import Testimonials from './pages/Testimonials';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/analytics',
    element: <Analytics />,
  },
  {
    path: '/buy-sell',
    element: <BuySell />,
  },
  {
    path: '/why-us',
    element: <WhyUs />,
  },
  {
    path: '/testimonials',
    element: <Testimonials />,
  },
]);