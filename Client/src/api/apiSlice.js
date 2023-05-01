// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productSlice = createApi({
  reducerPath: 'productSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000'}),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
      providesTags: ["Products"],
      transformResponse: response => response.sort((a,b) => b.id - a.id)
    }),
    createProduct : builder.mutation({
   query: (newProduct) => ({
    url: `products`,
    method: 'POST',
    body :newProduct,
  }),
  invalidatesTags:["Products"]
    })
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery,useCreateProductMutation } = productSlice




