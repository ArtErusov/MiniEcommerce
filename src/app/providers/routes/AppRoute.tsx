import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../../layouts/AppLayout';
import { Cart } from '@/pages/Cart';
import { Error } from '@/pages/Error';
import { Favorites } from '@/pages/Favorites';
import { Main } from '@/pages/Main';

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Main />,
            errorElement: <Error />,
         },
         {
            path: 'cart',
            element: <Cart />,
            errorElement: <Error />,
         },
         {
            path: 'favorites',
            element: <Favorites />,
            errorElement: <Error />,
         },
      ],
   },
]);

export default router;
