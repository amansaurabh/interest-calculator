import React, { useState } from 'react'

import classes from "./UserInput.module.css"

const initialUserInput = {
    "current-savings": '',
    "yearly-contribution": '',
    "expected-return": '',
    "duration": '',
}

const UserInput = (props) => {

    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted")
        props.onCalculate(userInput)
    }

    const resetHandler = () => {
        setUserInput(initialUserInput)
    }

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            }
        })
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings (₹)</label>
                    <input
                        type="number"
                        id="current-savings"
                        onChange={(e) => inputChangeHandler("current-savings", e.target.value)}
                        value={userInput['current-savings']}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        onChange={(e) => inputChangeHandler("yearly-contribution", e.target.value)}
                        value={userInput['yearly-contribution']}
                    />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        onChange={(e) => inputChangeHandler("expected-return", e.target.value)}
                        value={userInput["expected-return"]}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        type="number"
                        id="duration"
                        onChange={(e) => inputChangeHandler("duration", e.target.value)}
                        value={userInput["duration"]}
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default UserInput
