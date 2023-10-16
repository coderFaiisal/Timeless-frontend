"use client";

import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center">
      <Spinner color="cyan" className="h-12 w-12" />
    </div>
  );
};

export default Loader;
