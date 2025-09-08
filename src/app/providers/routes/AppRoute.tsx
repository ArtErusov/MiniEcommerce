import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../../layouts/AppLayout';

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children: [
         {
            path: 't1',
            element: <p>Test1 </p>,
         },
         {
            path: 't2',
            element: <p>Test2 </p>,
         },
      ],
   },
]);

export default router;
