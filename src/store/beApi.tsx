import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Just a example how to send request to BE
// You can ready more here: https://redux-toolkit.js.org/rtk-query/usage/queries
export const beApi = createApi({
  reducerPath: "beApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081/",
  }),
  endpoints: (builder) => ({
    getHello: builder.query<string, void>({
      query: () => ({
        url: "hello",
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useGetHelloQuery } = beApi;
