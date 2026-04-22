import React from "react";
import Text from "../Text";

function RecommandedOffer() {
  return (
    <Text
      text={"Recommended"}
      style={
        "absolute bg-green-500 rounded-2xl p-1 z-10 -right-2 shadow text-amber-50 font-bold flex justify-center items-center"
      }
    />
  );
}

export default RecommandedOffer;
