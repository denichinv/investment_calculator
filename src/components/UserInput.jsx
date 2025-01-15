import React, { useState } from 'react';
import "./userInput.css";

const UserInput = () => {
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

    const isValid = Object.values(error).every((err) => err === "") && 
                    Object.values(userInput).every((value) => value > 0);

    console.log(userInput);

    return (
        <section id="user-input">
            <div>
                <div className='currency-switcher' >
                    <label>Currency:</label>
                    <select  value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <p className="input-group">
                    <label>Beginning Investment ({currency})</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        required
                        onChange={(e) => handleChange("initialInvestment", +e.target.value)}
                    />
                    {error.initialInvestment && (
                        <span className="error">{error.initialInvestment}</span>
                    )}
                </p>

                <p className="input-group">
                    <label>Annual Investment ({currency})</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        required
                        onChange={(e) => handleChange("annualInvestment", +e.target.value)}
                    />
                    {error.annualInvestment && (
                        <span className="error">{error.annualInvestment}</span>
                    )}
                </p>

                <p className="input-group">
                    <label>Return We Expect (%)</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        required
                        onChange={(e) => handleChange("expectedReturn", +e.target.value)}
                    />
                    {error.expectedReturn && (
                        <span className="error">{error.expectedReturn}</span>
                    )}
                </p>

                <p className="input-group">
                    <label>Yearly Investment</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        required
                        onChange={(e) => handleChange("duration", +e.target.value)}
                    />
                    {error.duration && (
                        <span className="error">{error.duration}</span>
                    )}
                </p>

                {!isValid && (
                    <p className="validation-error">
                        Please fix the errors above before proceeding.
                    </p>
                )}
            </div>
        </section>
    );
};

export default UserInput;
