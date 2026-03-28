import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-navy border-t-transparent rounded-full animate-spin" />
  </div>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'solutions',
        element: (
          <Suspense fallback={<Fallback />}>
            <SolutionsPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<Fallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
