import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [
    "product",
    "products",
    "wishList",
    "wishLists",
  ],
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    // if (result?.error?.status === 401 || result?.error?.status === 404) {
    //   api.dispatch(userLoggedOut());
    //   localStorage.clear();
    // }
    return result;
  },
  endpoints: () => ({}),
});

const baseQuery = fetchBaseQuery({
  baseUrl: "https://timeless-backend-coderfaiisal.vercel.app/api/v1",
  // baseUrl: "http://localhost:5000/api/v1",
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState)?.user?.accessToken;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});
