"use client";

import BlogPost from "@/components/home/BlogPost";
import FeaturedContent from "@/components/home/FeaturedContent";
import GoToTop from "@/components/home/GoToTop";
import HomeBanner from "@/components/home/HomeBanner";
import NewArrival from "@/components/home/NewArrival";
import Policies from "@/components/home/Policies";
import Testimonial from "@/components/home/Testimonial";
import TopProducts from "@/components/home/TopProducts";
import Loader from "@/components/shared/Loader";
import useAuthCheck from "@/hooks/useAuthCheck";

const HomePage = () => {
  const authChecked = useAuthCheck();

  if (!authChecked) return <Loader />;

  return (
    <div className="min-h-screen">
      <HomeBanner />
      <Policies />
      <FeaturedContent />
      <NewArrival />
      <TopProducts />
      <BlogPost />
      <Testimonial />
      <GoToTop />
    </div>
  );
};

export default HomePage;
