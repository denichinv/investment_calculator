export const calculateInvestment = (userInput) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;

  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let totalInvested = initialInvestment;

  for (let year = 1; year <= duration; year++) {
    if (year > 1) {
      investmentValue += annualInvestment;
      totalInvested += annualInvestment;
    }

    const interestThisYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestThisYear;
    totalInterest += interestThisYear;

    annualData.push({
      year: year,
      investmentValue: Math.round(investmentValue * 100) / 100,
      interest: Math.round(interestThisYear * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalInvested: Math.round(totalInvested * 100) / 100,
    });
  }

  return annualData;
};
