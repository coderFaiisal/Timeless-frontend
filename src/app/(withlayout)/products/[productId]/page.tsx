"use client";

import { AiOutlineAppstore, AiFillCheckCircle } from "react-icons/ai";
import Loader from "@/components/shared/Loader";
import CustomBreadcrumb from "@/components/ui/CustomBreadcrumb";
import ProductReview from "@/components/ui/ProductReview";
import {
  useDeleteProductMutation,
  useGetSingleProductQuery,
} from "@/redux/features/product/productApi";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ProductDetails = ({ params }: any) => {
  const myStyles = {
    itemShapes: ThinStar,
    inactiveFillColor: "#ffb700",
  };

  const [activeTab, setActiveTab] = useState("description");

  const { user } = useAppSelector((state: any) => state.user);

  const { data, isLoading } = useGetSingleProductQuery(params.productId);

  const tabsData = [
    {
      label: "Description",
      value: "description",
      desc: data?.data?.description,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: data?.data?.reviews,
    },
  ];

  const name: string = data?.data?.name;

  const [deleteBook, { isSuccess, isError }] = useDeleteProductMutation();

  const handleDelete = () => {
    deleteBook(params.productId);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="px-10 xl:px-20">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <CustomBreadcrumb
              items={[
                {
                  label: "Home",
                  link: "/",
                },
                {
                  label: "Shop",
                  link: "/shop",
                },
                {
                  label: `${name}`,
                  link: `/products/${data?.data?._id}`,
                },
              ]}
            />
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <Image
                      className="h-96 w-full max-w-full object-cover"
                      src={data?.data?.photoURL}
                      alt="product image"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                    >
                      <Image
                        className="h-full w-full max-w-full object-cover"
                        src={data?.data?.photoURL}
                        alt="product image"
                        width={500}
                        height={500}
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <Image
                        className="h-full w-full max-w-full object-cover"
                        src={data?.data?.photoURL}
                        alt="product image"
                        width={500}
                        height={500}
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <Image
                        className="h-full w-full max-w-full object-cover"
                        src={data?.data?.photoURL}
                        alt="product image"
                        width={500}
                        height={500}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {data?.data?.name}
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <Rating
                    className="flex"
                    value={data?.ratings}
                    itemStyles={myStyles}
                    style={{ maxWidth: 100 }}
                  />
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {data?.data?.reviews?.length}
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">${data?.data?.price}</h1>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <AiFillCheckCircle className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  Availablity : {data?.data?.status}
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <AiOutlineAppstore className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  In Stock: {data?.data?.stockQuantity}
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <Tabs value={activeTab}>
                <TabsHeader
                  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                  }}
                >
                  {tabsData?.map(({ label, value }: any) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={activeTab === value ? "text-gray-900" : ""}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {tabsData?.map(({ value, desc }: any) => (
                    <TabPanel key={value} value={value}>
                      {value === "description"
                        ? desc
                        : desc?.map((d: any) => (
                            <li key={d?._id}>{d.review}</li>
                          ))}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <ProductReview
        productId={params.productId!}
        reviews={data?.data?.reviews}
      ></ProductReview>
    </div>
  );
};

export default ProductDetails;
