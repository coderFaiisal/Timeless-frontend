import BlogPost from "@/components/ui/BlogPost";
import FeaturedContent from "@/components/ui/FeaturedContent";
import GoToTop from "@/components/ui/GoToTop";
import HomeBanner from "@/components/ui/HomeBanner";
import NewArrival from "@/components/ui/NewArrival";
import Policies from "@/components/ui/Policies";
import Testimonial from "@/components/ui/Testimonial";
import TopProducts from "@/components/ui/TopProducts";

const HomePage = () => {
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
