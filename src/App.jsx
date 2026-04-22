import { useState } from "react";
import BankOffer from "./componenets/offers/BankOffer";
import BankOfferDetailsCard from "./componenets/offers/offerDetailsComponents/BankOfferDetailsCard";
import OfferDetails from "./componenets/offers/offerDetailsComponents/OfferDetails";
import OfferList from "./componenets/offers/OfferList";
import Text from "./componenets/Text";
import { bankCalculatedOffer } from "./utilities/offerDetails";

function App() {
  const [offer, setOffer] = useState(null);

  const handleSeeBankDetails = (offer) => {
    const calculatedOffer = bankCalculatedOffer(
      offer.amount,
      offer.rate,
      offer.year,
    );
    setOffer({ data: calculatedOffer, bank: offer.bank });
  };

  return (
    <div className=" my-4 p-6 bg-[#fafbff]">
      <Text
        text={"Comparateur d'Offres de Crédit"}
        style={"text-[#88ACFF] text-center"}
      />
      <Text
        text={
          "Comparez les différentes offres de crédit et visualisez l'évolution de votre capital avec les intérêts composés"
        }
        style={"text-[#FFFFFF] text-center min-w-1/2 "}
      />

      <Text text={"Offres disponibles"} style={"text-[#FFFFFF] mt-8"} />

      <OfferList handleSeeBankDetails={handleSeeBankDetails} />

      <OfferDetails offer={offer} />
    </div>
  );
}

export default App;
