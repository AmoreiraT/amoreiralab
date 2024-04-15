// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@features/HomePage';
import { VerifyNotFound } from './VerifyNotFound';

const createRoutes = () => {
  return createBrowserRouter([
    {
      path: '/',

      element: <HomePage />,

      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/home',
          element: <HomePage />,
        },
        {
          path: '/not-authorized',
          element: <>Not Authorized</>,
        },
        {
          path: '*',
          element: <>Err</>,
        },
        {
          path: '/system-error',
          element: <VerifyNotFound component={<>Err</>} />,
        },

        {
          path: '/',
          element: <HomePage />,
        },
      ],
    },
  ]);
};

export function Routes() {
  const router = createRoutes();

  return <RouterProvider router={router} />;
}
