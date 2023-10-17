import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/add-review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    getAllProducts: builder.query({
      query: ({ searchTerm, title }) => {
        let queryString = `/products?limit=40`;
        if (searchTerm && searchTerm.length > 0) {
          queryString += `&searchTerm=${searchTerm}`;
        }
        if (title && title.length > 0) {
          queryString += `&title=${title}`;
        }
        return queryString;
      },
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["products", "product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useAddReviewMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
