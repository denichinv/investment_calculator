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

    const isValid = Object.values(error).every((err) => err === "") && 
                    Object.values(userInput).every((value) => value > 0);

    console.log(userInput);

    return (
        <section id="user-input">
            <div>
                <p className="input-group">
                    <label>Beginning Investment</label>
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
                    <label>Annual Investment</label>
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
                    <label>Return We Expect</label>
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
