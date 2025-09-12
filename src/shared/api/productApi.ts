import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '@/entities/product/model/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65523e2c5c69a7790329c0eb.mockapi.io/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: 'Orange',
        params: { page, limit },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;