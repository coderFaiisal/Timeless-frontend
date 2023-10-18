"use client";

import { useAppSelector } from "@/redux/hook";
import {
  useCreateWishListMutation,
  useDeleteWishListMutation,
  useGetSingleWishListsQuery,
} from "@/redux/features/wishList/wishListApi";
import Image from "next/image";
import Link from "next/link";
import Loader from "../shared/Loader";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ProductCard = ({ product, isLoading }: any) => {
  const { user } = useAppSelector((state) => state.user);

  //wish list functionality
  const { data: wishData } = useGetSingleWishListsQuery(product?._id);
  const [
    createWishList,
    {
      isLoading: createWishLoading,
      isSuccess: createWishSuccess,
      isError: createWishError,
    },
  ] = useCreateWishListMutation();

  const [
    deleteWishlist,
    {
      isLoading: deleteWishLoading,
      isSuccess: deleteWishSuccess,
      isError: deleteWishError,
    },
  ] = useDeleteWishListMutation();

  const handleAddToWishlist = () => {
    if (user) {
      const wishListData = {
        userEmail: user?.email,
        productId: product?._id,
      };

      createWishList(wishListData);
    } else {
      console.log("");
    }
  };

  const handleRemoveFromWishList = () => {
    deleteWishlist(product._id);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="group my-1 lg:my-4 flex w-full md:max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
      <Link
        href={`/products/${product?._id}`}
        className="relative flex h-80 overflow-hidden"
      >
        <Image
          className="absolute top-0 right-0 h-full w-full object-cover"
          src={product?.photoURL}
          alt="product image"
          width={500}
          height={500}
        />
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          {product?.status}
        </span>
        <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
          <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
        </div>
        <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
          <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href={`/products/${product?._id}`}>
          <h5 className="text-xl tracking-tight text-slate-900">
            {product?.name}
          </h5>
        </Link>
        <div className="mt-2 mb-5">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${product?.price}
            </span>
            {/* <span className="text-sm text-slate-900 line-through">$99</span> */}
          </p>

          <Rating className="flex text-xs" value={product?.ratings} />
        </div>
        <button className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
