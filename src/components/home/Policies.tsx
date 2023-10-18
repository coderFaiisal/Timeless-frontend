"use client";

import { GiCommercialAirplane, GiRapidshareArrow } from "react-icons/gi";
import { TiSupport } from "react-icons/ti";
import { BsCreditCard2Front } from "react-icons/bs";

const Policies = () => {
  const policies = [
    {
      icon: <GiCommercialAirplane />,
      title: "Free Shipping",
      description: " Free Shipping On All US Order Or Order Above $200",
    },

    {
      icon: <TiSupport />,
      title: "Support 24/7",
      description: "Contact Us 24 Hours A Day, 7 Days A Week",
    },

    {
      icon: <GiRapidshareArrow />,
      title: "30 Days Return",
      description: " Simply Return It Within 30 Days For An Exchange",
    },
    {
      icon: <BsCreditCard2Front />,
      title: "100% Payment Secure",
      description: "We Ensure Secure Payment With PEV",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-4/5 mx-auto py-10">
      {policies?.map((policy) => (
        <div key={policy?.title} className="flex p-4 ">
          <div className="text-blue-500 text-5xl">{policy?.icon}</div>
          <div className="ml-4">
            <h1 className="text-lg">{policy?.title}</h1>
            <p className="text-sm mt-2">{policy?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policies;
