"use client";

import Loader from "@/components/shared/Loader";
import ProductReview from "@/components/ui/ProductReview";
import {
  useDeleteProductMutation,
  useGetSingleProductQuery,
} from "@/redux/features/product/productApi";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";

const ProductDetails = ({ params }: any) => {
  const { user } = useAppSelector((state: any) => state.user);

  const { data, isLoading } = useGetSingleProductQuery(params.productId);

  console.log(data, params);

  const [deleteBook, { isSuccess, isError }] = useDeleteProductMutation();

  const handleDelete = () => {
    deleteBook(params.productId);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="px-10 xl:px-20 py-10">
      <div className="flex mx-auto items-center gap-12 pb-10  border-b border-gray-300">
        <div className="w-[50%] lg:w-[30%]">
          <Image
            className="w-full"
            src={data?.data?.images}
            width={500}
            height={500}
            alt="image"
          />
        </div>
        <div className="w-[70%] space-y-3">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {data?.data?.title}
          </h1>
          <p className="text-md md:text-xl">
            Description: {data?.data?.description}
          </p>
          <p className=" text-md md:text-xl">Price : {data?.data?.price}</p>
          <p className="text-md md:text-xl">Rating: {data?.data?.ratings}</p>
        </div>
      </div>
      <ProductReview
        productId={params.productId!}
        reviews={data?.data?.reviews}
      ></ProductReview>
    </div>
  );
};

export default ProductDetails;
