import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const adminApi = createApi({
  reducerPath: "admin", // used in store to set key name like : [adminApi.reducerPath] : adminApi.reducer
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builer) => ({
    getAccounts: builer.query({
      //get request of accounts
      query: () => `accounts`,
      transformResponse: (response)=> response.sort((a,b)=> a.id - b.id),
      providesTags: ["accounts"]
    }),
    addAccount: builer.mutation({
      //post request on accounts
      query: ({amount, id}) => ({
        url: "accounts",
        method: "POST",
        body: { amount, id },
      }),
      invalidatesTags: ['accounts']
    }),
    deleteAccount: builer.mutation({
        //delete request of accounts
        query: ({id}) => ({
            url : `accounts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ["accounts"]
      }),
    updateAccount: builer.mutation({
        //patch request of accounts
        query: ({amount, id}) => ({
            url : `accounts/${id}`,
            method: 'PATCH',
            body: { amount },
        }),
        invalidatesTags: ["accounts"]
      }),
  }),
});

export default adminApi;
export const { useGetAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } = adminApi;
