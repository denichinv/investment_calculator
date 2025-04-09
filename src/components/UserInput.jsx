/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import "./userInput.css";

const UserInput = ({userInput,error,currency,handleChange,handleCurrencyChange, isValid}) => {





    console.log(userInput);

    return (
        <section id="user-input">
            <div>
                <div className='currency-switcher' >
                    <label>Currency</label>
                    <select  value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    
                </div>
                <hr /> <br />
                <p className="input-group">
                    <label>Your Initial Investment ({currency})</label>
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
                    <label> Your Annual Investment ({currency})</label>
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
                    <label>Interest Rate (%)</label>
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
                    <label>Years of growth</label>
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
