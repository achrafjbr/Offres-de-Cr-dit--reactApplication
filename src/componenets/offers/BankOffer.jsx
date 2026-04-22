import React from "react";
import Text from "../Text";
import RecommandedOffer from "./RecommandedOffer";

function BankOffer({
  id,
  bank,
  amount,
  rate,
  year,
  minRate = false,
  handleSeeBankDetails,
}) {
  return (
    <div
      key={id}
      className="relative"
      onClick={() => {
        handleSeeBankDetails({
          id: id,
          bank: bank,
          amount: amount,
          rate: rate,
          year: year,
        });
      }}
    >
      {minRate && <RecommandedOffer />}
      <div
        // relative
        className=" bg-white p-2 mt-3 rounded-2xl shadow-md hover:shadow-xl cursor-pointer hover:-translate-y-1 duration-150"
      >
        <Text text={bank} style={"font-bold text-2xl mb-3"} />

        <div className="flex flex-col gap-2 ">
          <div className="flex justify-between">
            <Text text={"Montant"} style={"font-extralight"} />
            <Text text={amount} style={"font-bold text-2xl"} />
          </div>
          <div className="flex justify-between">
            <Text text={"Taux d'intérêt"} style={"font-extralight"} />
            <Text text={rate} style={"font-bold text-2xl text-[#0400FF]"} />
          </div>

          <div className="flex justify-between">
            <Text text={"Année"} style={"font-extralight"} />
            <Text
              text={`${year} Ans`}
              style={"font-bold text-2xl text-[#0400FF]"}
            />
          </div>
          <Text
            text={"Cliquer pour voir les détails"}
            style={
              "font-light text-2xl text-[#0400FF] text-center hover:text-red-300"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BankOffer;
