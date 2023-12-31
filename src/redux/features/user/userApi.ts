import { api } from "../../api/apiSlice";
import { userLoggedIn } from "./userSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "auth/signUp",
        method: "POST",
        body: data,
      }),
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: "auth/signIn",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "user",
            JSON.stringify({
              accessToken: result?.data?.data?.accessToken,
            })
          );
          dispatch(userLoggedIn(result?.data?.data?.accessToken));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getAccessToken: builder.mutation({
      query: () => ({
        url: "auth/refresh-token ",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetAccessTokenMutation,
} = userApi;
