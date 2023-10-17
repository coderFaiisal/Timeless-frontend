"use client";

import Image from "next/image";
import banner1 from "../../../public/banner-1.jpg";
import banner2 from "../../../public/banner-2.jpg";
import banner3 from "../../../public/banner-3.jpg";

const BlogPost = () => {
  const posts = [
    {
      image: banner1,
      title: "Quesque Egastus",
      author: "Admin",
      time: "April 25, 2023",
    },
    {
      image: banner2,
      title: "Post With Gallary",
      author: "Ovi Islam",
      time: "April 25, 2022",
    },
    {
      image: banner3,
      title: "Good Ornaments",
      author: "Nazrul",
      time: "April 25, 2022",
    },
  ];

  return (
    <div className=" min-h-96 mb-8 lg:mb-20">
      <div className="text-center pt-8">
        <h1 className="text-3xl font-semibold">From Our Blog</h1>
        <p className="text-sm opacity-60">There are latest blog posts</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 mx-auto mt-10">
        {posts?.map((post) => (
          <div key={post?.title}>
            <div className="">
              <Image
                src={post?.image}
                alt="feature image"
                className="w-full h-56"
                width={500}
                height={500}
              />
            </div>
            <div className="mt-2">
              <p className="text-xs opacity-60 py-2">
                By : {post?.author} / {post?.time}
              </p>
              <h1>{post?.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
