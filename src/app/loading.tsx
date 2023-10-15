"use client";

import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className=" justify-center items-center">
      <Spinner color="blue" />
    </div>
  );
};

export default Loading;
