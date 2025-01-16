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
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resdata.map((yearData,index) => (
        <tr key={index}>
        <td>{yearData.year}</td>
        <td>{yearData.investmentValue.toFixed(2)}{currencySymbol}</td>
        <td>{yearData.interest.toFixed(2)}{currencySymbol}</td>
        <td>{yearData.totalInterest.toFixed(2)}{currencySymbol}</td>
        <td>{yearData.totalInvested}{currencySymbol}</td>
        </tr>
    ))}
      </tbody>
      </table>
    </div>
  )
}

export default OutputData
