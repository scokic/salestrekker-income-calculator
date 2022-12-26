import React, { useEffect, useState } from "react"
import { taxRate } from "../consts"

const IncomeDetails = ({ formData }) => {
    const [calculatedIncome, setCalculatedIncome] = useState([
        {
            frequency: "weekly",
            frequencyLabel: "weekly",
            gross: 2,
            tax: 1,
            net: 1,
        },
        {
            frequency: "fortnightly",
            frequencyLabel: "fortnightly",
            gross: 3,
            tax: 1,
            net: 2,
        },
        {
            frequency: "monthly",
            frequencyLabel: "monthly",
            gross: 4,
            tax: 1,
            net: 3,
        },
        {
            frequency: "annually",
            frequencyLabel: "annual",
            gross: 5,
            tax: 1,
            net: 4,
        },
    ])

    const [activeIncome, setActiveIncome] = useState()

    useEffect(() => {
        // define weekly income as base
        let baseDailyNetIncome = {
            gross: 0,
            tax: 0,
            net: 0,
        }
        let divider

        if (formData.frequency === "weekly") {
            divider = 7
        } else if (formData.frequency === "fortnightly") {
            divider = 14
        } else if (formData.frequency === "monthly") {
            divider = 30
        } else if (formData.frequency === "annually") {
            divider = 365
        }

        // calculate weekly income
        if (formData.incomeType === "gross") {
            let grossIncome = formData.income / divider

            baseDailyNetIncome = {
                frequency: "weekly",
                frequencyLabel: "weekly",
                gross: grossIncome,
                tax: grossIncome * taxRate,
                net: grossIncome - grossIncome * taxRate,
            }
        } else {
            let netIncome = formData.income / divider

            baseDailyNetIncome = {
                frequency: "weekly",
                frequencyLabel: "weekly",
                gross: netIncome / (7 - taxRate),
                tax: (netIncome / (7 - taxRate)) * taxRate,
                net: netIncome,
            }
        }

        // calculate other incomes
        let weeklyIncome = {
            frequency: "weekly",
            frequencyLabel: "weekly",
            gross: (baseDailyNetIncome.gross * 7).toFixed(0),
            tax: (baseDailyNetIncome.tax * 7).toFixed(0),
            net: (baseDailyNetIncome.net * 7).toFixed(0),
        }

        let fortnightlyIncome = {
            frequency: "fortnightly",
            frequencyLabel: "fortnightly",
            gross: (baseDailyNetIncome.gross * 14).toFixed(0),
            tax: (baseDailyNetIncome.tax * 14).toFixed(0),
            net: (baseDailyNetIncome.net * 14).toFixed(0),
        }

        let monthlyIncome = {
            frequency: "monthly",
            frequencyLabel: "monthly",
            gross: (baseDailyNetIncome.gross * 30).toFixed(0),
            tax: (baseDailyNetIncome.tax * 30).toFixed(0),
            net: (baseDailyNetIncome.net * 30).toFixed(0),
        }

        let annualIncome = {
            frequency: "annually",
            frequencyLabel: "annual",
            gross: (baseDailyNetIncome.gross * 365).toFixed(0),
            tax: (baseDailyNetIncome.tax * 365).toFixed(0),
            net: (baseDailyNetIncome.net * 365).toFixed(0),
        }

        let allIncomes = [
            weeklyIncome,
            fortnightlyIncome,
            monthlyIncome,
            annualIncome,
        ]

        setCalculatedIncome(allIncomes)
        setActiveIncome(
            allIncomes.find((income) => income.frequency === formData.frequency)
        )
    }, [formData])

    return (
        <>
            <div className="flex items-center mb-4">
                <div className="bg-green-500 px-8 py-2 text-2xl rounded-md mr-4">
                    ${activeIncome?.net}
                </div>
                <span>your net {activeIncome?.frequencyLabel} income</span>
            </div>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Frequency
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Gross
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Tax
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Net
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {calculatedIncome.map((income) => {
                            return (
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-200"
                                    onClick={() => setActiveIncome(income)}
                                    key={income.frequency}
                                >
                                    <td className="py-4 px-6">
                                        {income.frequency}
                                    </td>
                                    <td className="py-4 px-6">
                                        ${income.gross}
                                    </td>
                                    <td className="py-4 px-6">${income.tax}</td>
                                    <td className="py-4 px-6">${income.net}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default IncomeDetails
