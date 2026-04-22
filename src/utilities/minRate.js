import bankOffersList from "./bankOffers";

const getTheMinRate = () => {
  let minRate = bankOffersList[0].rate;
  for (let index = 1; index < bankOffersList.length; index++) {
    if (bankOffersList[index].rate < minRate) {
      minRate = bankOffersList[index];
    }
  }
  return minRate;
};

export default getTheMinRate;
