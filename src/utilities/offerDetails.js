const getOfferDuration = (year) => {
  return {
    year: year,
    monthlyPayment: year * 12,
  };
};

const getInterest = (amount, rate, year) => {
  return amount * rate * year;
};

const getTotal = (amount, rate, year) => {
  const total = getInterest(amount, rate, year) + amount;
  return total;
};

const getOfferMonthlyPayment = (amount, rate, year) => {
  return (getTotal(amount, rate, year) / (year * 12)).toFixed(2);
};

const bankCalculatedOffer = (amount, rate, year) => {
  const duration = getOfferDuration(year);
  const monthlyPayment = getOfferMonthlyPayment(amount, rate, year);
  const total = getTotal(amount, rate, year);
  const interest = getInterest(amount, rate, year);
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
      data: interest + " d'intérêts",
    },
  ];
  return calculatedOffer;
};

export {
  getTotal,
  getOfferDuration,
  getOfferMonthlyPayment,
  bankCalculatedOffer,
  getInterest,
};
