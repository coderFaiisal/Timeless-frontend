"use client";

import CustomBreadcrumb from "@/components/ui/CustomBreadcrumb";
import { Pagination } from "@/components/ui/Pagination";
import ProductCard from "@/components/ui/ProductCard";
import useAuth from "@/hooks/useAuth";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const filtersData = [
  {
    id: 1,
    title: "Category",
    options: ["Bracelets", "Rings", "Earrings", "Necklaces"],
  },
  {
    id: 2,
    title: "Status",
    options: ["stock", "stock out"],
  },
  {
    id: 3,
    title: "Materials",
    options: [
      "18k Yellow Gold, Emeralds",
      "14k White Gold, Sapphires",
      "Sterling Silver, Freshwater Pearls",
    ],
  },
  {
    id: 4,
    title: "Discounts",
    options: ["5%", "10%", "15%", "20%", "25%", "30%", "40%", "50%"],
  },
];

export default function Products() {
  const isLoggedIn = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push("/signIn");
  //   }
  // }, [isLoggedIn]);

  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [materials, setMaterials] = useState<string>("");
  const [discounts, setDiscounts] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const { data, isLoading } = useGetAllProductsQuery({
    searchTerm,
    category,
    status,
    materials,
    discounts,
    size,
    page,
    sortBy,
    sortOrder,
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

  function Icon({ id, open }: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    
    <div className="grid grid-cols-12 mx-auto justify-center items-center relative px-10 xl:px-20 pt-5">
      <div className="col-span-12 md:col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-4 self-start lg:sticky top-[84px] md:h-[calc(100vh-100px)]">
        {/* Search form */}
        <div className="mb-5">
          <form className="relative">
            <input
              onChange={debounce(handleSearch, 300)}
              className="rounded-md w-full pl-9 p-1 border border-gray-200 hover:border-gray-300 focus:border-blue-300 focus:ring-blue-300 outline-none"
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
                className="w-4 h-4 shrink-0 fill-current text-slate-400 text-indigo-500 group-hover:text-gray-600 ml-3 mr-2"
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
          <div className="mt-3 space-y-2 max-h-[calc(100vh-229px)] overflow-auto  scrollbar-hide">
            {filtersData.map((fd) => (
              <Accordion
                open={open === fd.id}
                icon={<Icon id={fd.id} open={open} />}
                key={fd.title}
              >
                <AccordionHeader
                  className="text-md font-medium"
                  onClick={() => handleOpen(fd.id)}
                >
                  {fd.title}
                </AccordionHeader>
                <AccordionBody className="">
                  <ul className="space-y-2">
                    {fd.options.map((o) => (
                      <li key={o}>
                        <label className="flex items-center cursor-pointer">
                          <input
                            checked={
                              (fd.title === "Category" && category === o) ||
                              (fd.title === "Status" && status === o) ||
                              (fd.title === "Materials" && materials === o) ||
                              (fd.title === "Discounts" && discounts === o)
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                fd.title === "Category"
                                  ? setCategory(o)
                                  : fd.title === "Status"
                                  ? setStatus(o)
                                  : fd.title === "Materials"
                                  ? setMaterials(o)
                                  : setDiscounts(o);
                              } else {
                                fd.title === "Category"
                                  ? setCategory("")
                                  : fd.title === "Status"
                                  ? setStatus("")
                                  : fd.title === "Materials"
                                  ? setMaterials("")
                                  : setDiscounts("");
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
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-9 ">
        <div className="my-1 flex gap-2 items-center">
          <CustomBreadcrumb
            items={[
              {
                label: "shop",
                link: "/shop",
              },
            ]}
          />

          <p className="text-sm"> Total Products Found: {data?.meta?.total}</p>
        </div>
        {data?.length === 0 ? (
          <p className="text-2xl my-32 font-semibold text-center">
            There is no Product!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 2xl:gap-24 lg:pb-20 min-h-screen">
            {data?.data?.map((product: any) => (
              <ProductCard
                key={product?._id}
                isLoading={isLoading}
                product={product}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <Pagination setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
