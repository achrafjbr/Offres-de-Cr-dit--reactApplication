const getOfferDuration = (year) => {
  return {
    year: year,
    monthlyPayment: year * 12,
  };
};

const getTotal = (amount, rate, year) => {
  const interest = amount * rate * year;
  const total = interest + amount;
  return total;
};

const getOfferMonthlyPayment = (amount, rate, year) => {
  return (getTotal(amount, rate, year) / (year * 12)).toFixed(2);
};

const bankCalculatedOffer = (amount, rate, year) => {
  const duration = getOfferDuration(year);
  const monthlyPayment = getOfferMonthlyPayment(amount, rate, year);
  const total = getTotal(amount, rate, year);

  const calculatedOffer = [
    {
      calc: duration.year + " ans",
      data: duration.monthlyPayment + " mensualités",
    },

    {
      calc: monthlyPayment + " DH",
      data: "par mois",
    },
    {
      calc: total + " DH",
      data: " d'intérêts",
    },
  ];
  return calculatedOffer;
};

export {
  getTotal,
  getOfferDuration,
  getOfferMonthlyPayment,
  bankCalculatedOffer,
};
