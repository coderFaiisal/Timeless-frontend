"use client";

import { useAddReviewMutation } from "@/redux/features/product/productApi";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useState } from "react";
import Loader from "../shared/Loader";
import { HiPaperAirplane } from "react-icons/hi2";
import { Textarea } from "@material-tailwind/react";

export default function ProductReview({ id, reviews }: any) {
  const [inputValue, setInputValue] = useState<string>("");

  const { user } = useAppSelector((state: any) => state.user);

  const [addReview, { isSuccess, isLoading }] = useAddReviewMutation();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (user) {
      const reviewData = {
        id,
        data: {
          userName: user?.name,
          review: inputValue,
        },
      };
      addReview(reviewData);
      setInputValue("");
    } else {
      console.log("");
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          label="Add Review"
          className="textarea textarea-bordered w-full textarea-xs lg:textarea-md"
          onChange={handleChange}
          value={inputValue}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <button type="submit" className="rounded-full text-[25px]">
            <HiPaperAirplane className=" -rotate-45 bg-purple-500 text-white w-8 lg:w-12 h-8 lg:h-12 rounded-full p-2" />
          </button>
        )}
      </form>
      <div className="mt-10">
        {reviews?.map((review: any) => (
          <div key={review?._id} className="flex gap-3 items-center mb-5">
            <div className="w-8 md:w-12 h-8 md:h-12 ">
              <Image
                src=""
                alt="avatar"
                className="rounded-full"
                width={500}
                height={500}
              />
            </div>
            <div>
              <p className="font-semibold text-xs md:text-lg">
                {review?.userName}
              </p>
              <p className="text-xs md:text-sm">{review?.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
