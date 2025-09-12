import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VITE_AUTH = import.meta.env.VITE_AUTH_API_URL;

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_AUTH
  }),
  endpoints: () => ({}),
});