import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
