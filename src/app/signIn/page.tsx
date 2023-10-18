"use client";

import { notify } from "@/components/ui/Toastify";
import useAuth from "@/hooks/useAuth";
import { useLoginUserMutation } from "@/redux/features/user/userApi";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [login, { data, error }] = useLoginUserMutation();

  const isLoggedIn = useAuth();

  const onSubmit = (data: LoginFormInputs) => {
    login({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (isLoggedIn) {
      redirect("/");
    }
    if (error) {
      notify("error", (error as any)?.data?.message);
    }
    if (data?.data?.accessToken) {
      notify("success", "User logging successfully");
      redirect("/");
    }
  }, [data, error, isLoggedIn]);

  return (
    <div className="flex justify-center items-center py-12">
      <Card className="w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 leading-6 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Sign In</p>
            <p className="text-xs">
              Please sign in to your Timeless Account...
            </p>
          </div>

          <CardBody className="flex flex-col gap-4">
            <Input
              {...register("email", { required: "Email is required" })}
              label="Email"
              type="email"
              size="lg"
              crossOrigin={undefined}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              {...register("password", { required: "Password is required" })}
              label="Password"
              size="lg"
              type="password"
              crossOrigin={undefined}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="-ml-2.5 text-sm">
              <Checkbox
                onClick={() => setIsChecked(!isChecked)}
                label="Agree terms & conditions?"
                crossOrigin={undefined}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            {isChecked ? (
              <Button type="submit" color="blue" variant="gradient" fullWidth>
                Sign In
              </Button>
            ) : (
              <Button
                disabled
                type="submit"
                color="blue"
                variant="gradient"
                fullWidth
              >
                Sign In
              </Button>
            )}
            <p className="mt-6 flex justify-center text-sm">
              Don&apos;t have an account?
              <Link href="/signUp">
                <span className="ml-1 font-bold text-blue-500">Sign up</span>
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
