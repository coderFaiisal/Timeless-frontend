import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const isLoggedIn = useAuth();

  if (!isLoggedIn) {
    return redirect("/singIn");
  }

  return children;
};

export default PrivateRoute;
