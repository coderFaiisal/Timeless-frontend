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
      query: ({
        searchTerm,
        category,
        status,
        materials,
        discounts,
        size,
        page,
        sortBy,
        sortOrder,
      }) => {
        let queryString = `/products?limit=10`;
        if (searchTerm && searchTerm.length > 0) {
          queryString += `&searchTerm=${searchTerm}`;
        }
        if (category && category.length > 0) {
          queryString += `&category=${category}`;
        }
        if (status && status.length > 0) {
          queryString += `&status=${status}`;
        }
        if (materials && materials.length > 0) {
          queryString += `&materials=${materials}`;
        }
        if (discounts && discounts.length > 0) {
          queryString += `&discounts=${discounts}`;
        }
        if (size && size > 0) {
          queryString += `&size=${size}`;
        }
        if (page && page > 0) {
          queryString += `&page=${page}`;
        }
        if (sortBy && sortBy.length > 0) {
          queryString += `&sortBy=${sortBy}`;
        }
        if (sortOrder && sortOrder.length > 0) {
          queryString += `&sortOrder=${sortBy}`;
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
