import axios from 'axios';
import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router-dom';
import { AppLayout } from '../../layouts/AppLayout';
import { AuthLayout } from '@/app/layouts/AuthLayout';
import { Cart } from '@/pages/Cart';
import { Error } from '@/pages/Error';
import { Login } from '@/pages/Login';
import { Main } from '@/pages/Main';
import { Product } from '@/pages/Product';
import { RequireAuth } from '@/shared/lib/auth/RequireAuth';

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
            element: (
               <RequireAuth>
                  <Cart />
               </RequireAuth>
            ),
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

   {
      path: '/auth',
      element: <AuthLayout />,
      errorElement: <Error />,
      children: [
         {
            path: '',
            element: <Login />,
         },
         {
            path: 'reg',
            element: <p>Регистрация</p>,
         },
      ],
   },
]);

export default router;
