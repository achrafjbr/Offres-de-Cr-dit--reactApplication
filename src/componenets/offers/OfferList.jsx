import React from "react";
import BankOffer from "./BankOffer";
import bankOffersList from "../../utilities/bankOffers";
import getTheMinRate from "../../utilities/minRate";

function OfferList({ handleSeeBankDetails }) {
  const minRate = getTheMinRate();

  const bankOfferCard = bankOffersList.map((offer) => {
    if (minRate.id == offer.id)
      return BankOffer({ ...offer, minRate: true, handleSeeBankDetails });
    return BankOffer({ ...offer, handleSeeBankDetails });
  });

  return (
    <div className=" grid gap-x-5 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {bankOfferCard}
    </div>
  );
}

export default OfferList;
