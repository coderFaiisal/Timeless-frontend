"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/shared/Loader";
import { SideBar } from "@/components/ui/SideBar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isLoggedIn = useAuth();

  console.log(isLoggedIn);

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/signIn");
    }
    setIsLoading(true);
  }, [isLoggedIn, router]);

  if (!isLoading) return <Loader />;

  return (
    <section className="grid grid-cols-12">
      <div className="col-span-4">
        <SideBar />
      </div>
      <div className="col-span-8">{children}</div>
    </section>
  );
};

export default DashboardLayout;
