import axios from 'axios';
import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router-dom';
import { AppLayout } from '../../layouts/AppLayout';
import { Cart } from '@/pages/Cart';
import { Error } from '@/pages/Error';
import { Favorites } from '@/pages/Favorites';
import { Main } from '@/pages/Main';
import { Product } from '@/pages/Product';

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
         {
            path: 'product/:id',
            element: <Product />,
            errorElement: <Error />,
            loader: async ({ params }: LoaderFunctionArgs) => {
               try {
                  const { data } = await axios.get(
                     `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?customId=${params.id}`,
                  );
                  return data; // Возвращаем полученные данные (будут доступны через useLoaderData)
               } catch (err) {
                  throw new Response('Product not found', { status: 404 }); // Ошибка - будет показан errorElement
               }
            },
         },
      ],
   },
]);

export default router;
