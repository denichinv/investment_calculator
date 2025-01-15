import React, { useState } from 'react'
import "./userInput.css"

const UserInput = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment:10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10

    })

    function handleChange(id,newValue) {
        setUserInput((prev)=>({
            ...prev,
            [id]:newValue
        }))
    }
    console.log(userInput)
  return (
 <section id='user-input'>
<div>
    <p  className='input-group'>
    <label>Beginning Investment</label>
    <input type="number" value={userInput.initialInvestment} required onChange={(e)=>handleChange("initialInvestment",e.target.value)} />
    </p>
    <p  className='input-group'>
    <label>Annual Investment</label>
    <input type="number" value={userInput.annualInvestment} required onChange={(e)=>handleChange("annualInvestment",e.target.value)}  />
    </p>
    <p className='input-group'>
    <label>Return We Expect </label>
    <input type="number" value={userInput.expectedReturn} required onChange={(e)=>handleChange("expectedReturn",e.target.value)}  />
    </p>
    <p className='input-group'>
    <label>Yearly Investment</label>
    <input type="number" value={userInput.duration} required onChange={(e)=>handleChange("duration",e.target.value)} />
    </p>
</div>
 </section>
  )
}

export default UserInput
