import React from 'react'
import classes from "./ResultsTable.module.css"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

const ResultsTable = (props) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearData, index) => (
                    <tr key={index}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                        <td>{formatter.format(yearData.yearlyInterest)}</td>
                        <td>{formatter.format(yearData.savingsEndOfYear - props.intialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                        <td>{formatter.format(props.intialInvestment + yearData.yearlyContribution * yearData.year)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultsTable