/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { calculateInvestment } from '../util/calculateInvestment'
import "./outputData.css"

const OutputData = ({userInput, currency}) => {
    const resdata = calculateInvestment(userInput)
    let currencySymbol = ''
    switch (currency) {
        case "USD":
            currencySymbol = "$"
            break;
        case "EUR":
            currencySymbol = "€"
            break;
        case "GBP":
            currencySymbol = "£"
            break;
    
       
    }
  return (
    <div>
      <table id='result'>
      <thead>
        <tr>
            <th>Year</th>
            <th>Potential Future Balance</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Initial deposit</th>
        </tr>
      </thead>
      <tbody>
        {resdata.map((yearData,index) => (
        <tr key={index}>
        <td>{yearData.year}</td>
        <td>{currencySymbol}{yearData.investmentValue.toFixed(2)}</td>
        <td>{currencySymbol}{yearData.interest.toFixed(2)}</td>
        <td>{currencySymbol}{yearData.totalInterest.toFixed(2)}</td>
        <td>{currencySymbol}{yearData.totalInvested}</td>
        </tr>
    ))}
      </tbody>
      </table>
    </div>
  )
}

export default OutputData
