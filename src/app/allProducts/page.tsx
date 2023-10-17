"use client";

import Loader from "@/components/shared/Loader";
import ProductCard from "@/components/ui/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const filtersData = [
  {
    title: "title",
    options: ["Neclaces", "Ring"],
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const { data, isLoading } = useGetAllProductsQuery({
    searchTerm,
    title,
  });

  const debounce = <T extends (...args: any[]) => void>(
    fn: T,
    delay: number
  ) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-12 mx-auto relative px-10 xl:px-20 pt-5">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-4 self-start sticky top-[84px] h-[calc(100vh-100px)]">
        {/* Search form */}
        <div className="mb-5">
          <form className="relative">
            <input
              onChange={debounce(handleSearch, 300)}
              className="rounded-md w-full pl-9 py-1 border border-slate-200 hover:border-slate-300 focus:border-violet-300 focus:ring-violet-300"
              type="search"
              placeholder="Search Products"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="absolute inset-0 right-auto group"
              type="submit"
              aria-label="Search"
            >
              <svg
                className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-600 ml-3 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Filters */}
        <div className="">
          <h1 className="text-xl uppercase">Filters</h1>
          <div className="mt-3 space-y-2 max-h-[calc(100vh-229px)] overflow-auto scrollbar-none">
            {filtersData.map((fd) => (
              <AiOutlineArrowUp key={fd.title} title={fd.title}>
                <ul className="space-y-2">
                  {fd.options.map((o) => (
                    <li key={o}>
                      <label className="flex items-center cursor-pointer">
                        <input
                          checked={fd.title === "title" && title === o}
                          onChange={(e) => {
                            if (e.target.checked) {
                              fd.title === "title" ? setTitle(o) : "";
                            } else {
                              fd.title === "title" ? setTitle("") : "";
                            }
                          }}
                          type="checkbox"
                          className="h-4 w-4 border border-gray-500 rounded text-violet-500 focus:ring-transparent cursor-pointer"
                        />
                        <span className="text-sm text-slate-600 font-medium ml-2">
                          {o}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </AiOutlineArrowUp>
            ))}
          </div>
        </div>
      </div>
      {data?.length === 0 ? (
        <p className="col-span-9 text-2xl my-32 font-semibold text-center">
          There is no Product!
        </p>
      ) : (
        <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-4 2xl:gap-24 pb-20">
          {data?.data?.map((product: any) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
