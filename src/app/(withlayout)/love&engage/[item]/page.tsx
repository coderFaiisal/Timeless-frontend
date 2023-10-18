import React from "react";

const LoveAndEngageItems = ({ params }: any) => {
  return (
    <div>
      <h1>This is Love & Engagement page for : {params.item}</h1>
    </div>
  );
};

export default LoveAndEngageItems;
