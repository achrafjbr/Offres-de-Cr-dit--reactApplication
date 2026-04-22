import React from "react";
import Text from "../../Text";
import BankOfferDetailsCard from "./BankOfferDetailsCard";
import dureeIcon from "../../../assets/icons/duree.png";
import monthlyPaymentIcon from "../../../assets/icons/monthly-pay.png";
import coutTotalIcon from "../../../assets/icons/cout-total.png";

function OfferDetails({ offer }) {
  if (offer) {
    const [duree, monthlyPayment, total] = offer.data;
    return (
      <div className="bg-white rounded-2xl shadow-2xl mx-auto sm:mx-0 w-full sm:w-[80%]  mt-5  px-3 py-5">
        <Text
          text={`Détails de l'offre - ${offer.bank}`}
          style={"font-bold text-2xl text-[#00000]"}
        />
        <Text
          text={"Analyse complète de votre crédit"}
          style={"font-extralight text-2xl text-[#00000]"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <BankOfferDetailsCard
            icon={dureeIcon}
            title="Duree"
            color="bg-cyan-200"
            calc={duree.calc}
            data={duree.data}
          />
          <BankOfferDetailsCard
            icon={monthlyPaymentIcon}
            title="Mensualité"
            color="bg-violet-200"
            calc={monthlyPayment.calc}
            data={monthlyPayment.data}
          />
          <BankOfferDetailsCard
            icon={coutTotalIcon}
            title="Coût total"
            color="bg-emerald-200"
            calc={total.calc}
            data={total.data}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 m-2">Évolution du capital avec intérêts composés</div>
  );
}

export default OfferDetails;
