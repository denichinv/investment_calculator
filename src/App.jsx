/* eslint-disable no-unused-vars */
import Header from './components/Header'
import UserInput from './components/UserInput';
import React, { useState } from 'react';
import OutputData from './components/OutputData';

import image from './assets/SEO-Cost-Calculator-1.png';


function App() {

  const [userInput, setUserInput] = useState({
         initialInvestment: 10000,
         annualInvestment: 1200,
         expectedReturn: 6,
         duration: 10,
     });
 
     const [error, setError] = useState({
         initialInvestment: "",
         annualInvestment: "",
         expectedReturn: "",
         duration: "",
     });
 
     const [currency, setCurrency] = useState("USD");
 
     const currencyRates = {
         USD: 1,      
         EUR: 0.91,    
         GBP: 0.78,    
     };
     
    const isValid = Object.values(error).every((err) => err === "") && 
    Object.values(userInput).every((value) => value > 0);

 
     function handleChange(id, newValue) {
      setUserInput((prev) => ({
          ...prev,
          [id]: newValue,
      }));


      if (!newValue || newValue <= 0) {
          setError((prevError) => ({
              ...prevError,
              [id]: "Value must be greater than 0",
          }));
      } else {
          setError((prevError) => ({
              ...prevError,
              [id]: "",
          }));
      }
  }
  function handleCurrencyChange(newCurrency) {
      const conversionRate = currencyRates[newCurrency] / currencyRates[currency]
      setCurrency(newCurrency)
      setUserInput((prevInput) => ({
          initialInvestment: prevInput.initialInvestment * conversionRate,
          annualInvestment: prevInput.annualInvestment * conversionRate,
          expectedReturn: prevInput.expectedReturn,
          duration: prevInput.duration,
      }));
    }
  return (
    <>
    <Header logo={image}/>
    <UserInput userInput={userInput} error={error} currency={currency} handleChange={handleChange} handleCurrencyChange={handleCurrencyChange} isValid={isValid}/>
    <OutputData userInput={userInput} currency={currency}/>

    </>
  )
}

export default App
