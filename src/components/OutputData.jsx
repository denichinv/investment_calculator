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
    
    // Format numbers with commas for thousands
    const formatNumber = (num) => {
        return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <div>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Future Balance</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resdata.map((yearData, index) => (
                        <tr key={index}>
                            <td>{yearData.year}</td>
                            <td>{currencySymbol}{formatNumber(yearData.investmentValue)}</td>
                            <td>{currencySymbol}{formatNumber(yearData.interest)}</td>
                            <td>{currencySymbol}{formatNumber(yearData.totalInterest)}</td>
                            <td>{currencySymbol}{formatNumber(yearData.totalInvested)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OutputData