"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useCreateUserMutation } from "@/redux/features/user/userApi";
import { notify } from "@/components/ui/Toastify";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SignupFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [createUser, { data, error }] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  useEffect(() => {
    if (data?.data?.email) {
      notify("success", "User created successfully");
      notify("success", "Please login now");
      redirect("/signIn");
    }
    if (error) {
      notify("error", (error as any).data.message);
    }
  }, [data, error]);

  const onSubmit = (data: SignupFormInputs) => {
    if (data.password !== data.confirmPassword) {
      notify("error", "Password do not match");
    } else {
      createUser({
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
      });
    }
  };

  return (
    <div className="flex justify-center items-center py-12">
      <Card className="w-[90%] lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 leading-6 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Create an Account</p>
            <p className="text-xs w-[70%] text-center mx-auto">
              Save time during checkout
            </p>
          </div>

          <CardBody className="flex flex-col gap-4">
            <Input
              {...register("name", { required: "Name is required" })}
              label="Name"
              type="text"
              size="lg"
              crossOrigin={undefined}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

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

            <Input
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
              label="Confirm Password"
              size="lg"
              type="password"
              crossOrigin={undefined}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <Input
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              label="Phone Number"
              size="lg"
              type="text"
              crossOrigin={undefined}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" color="blue" variant="gradient" fullWidth>
              Sign Up
            </Button>

            <p className="mt-6 flex justify-center text-sm">
              Already have an account?
              <Link href="/signIn">
                <span className="ml-1 font-bold text-blue-500">Sign In</span>
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
