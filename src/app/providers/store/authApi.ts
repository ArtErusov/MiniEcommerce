
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from './store';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://purpleschool.ru/pizza-api-demo',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwt;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // можно добавить другие endpoint'ы: register, refresh, etc.
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;