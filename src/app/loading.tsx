"use client";

import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <Spinner color="cyan" className="h-12 w-12" />
    </div>
  );
};

export default Loading;
