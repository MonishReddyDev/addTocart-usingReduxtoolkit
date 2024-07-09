import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../Types';

const shoppingCartApi = createApi({
  reducerPath: 'shoppingCartApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = shoppingCartApi;
export default shoppingCartApi;
