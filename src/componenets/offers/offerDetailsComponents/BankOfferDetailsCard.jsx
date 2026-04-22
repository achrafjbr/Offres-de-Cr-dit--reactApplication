import React from "react";
import Text from "../../Text";

function BankOfferDetailsCard({ icon, title, color, calc, data }) {
  return (
    <div className={` p-3 mt-3 rounded-lg  ${color}`}>
      <div className={`flex justify-start items-center `}>
        <img className="w-10 h-10" src={icon} alt="icon-image" />
        <Text text={title} style={"font-bold text-2xl text-[#00000]"} />
      </div>

      <div className="mt-3">
        <Text text={calc} style={"font-bold text-2xl text-[#00000]"} />
        <Text text={data} style={"font-extralight text-2xl text-[#00000]"} />
      </div>
    </div>
  );
}

export default BankOfferDetailsCard;
