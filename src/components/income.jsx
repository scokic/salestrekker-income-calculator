import React from "react"
import Button from "./button"
import { frequency, incomeType } from "../consts"

const Income = ({ formData, setFormData, setActiveStep, isFormDisabled }) => {
    return (
        <div className="pt-4">
            <form>
                <div>
                    <label className="block text-lg font-medium text-gray-700">
                        What is your total income?
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 sm:text-sm">
                                $
                            </span>
                            <input
                                type="text"
                                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-green-500 focus:ring-green-500 p-4 sm:text-sm"
                                placeholder="0.00"
                                value={formData.income}
                                onChange={(e) => {
                                    !isNaN(e.target.value) &&
                                        setFormData({
                                            ...formData,
                                            income: Number(e.target.value),
                                        })
                                }}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <select
                                    id="currency"
                                    name="currency"
                                    value={formData.frequency}
                                    className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500  sm:text-sm focus:ring-0 focus:border-0"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            frequency: e.target.value,
                                        })
                                    }}
                                >
                                    {frequency.map((item, idx) => {
                                        return (
                                            <option
                                                key={idx}
                                                value={item.value}
                                            >
                                                {item.label}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">
                        Please choose the income type
                        <div className="flex gap-2 mt-1 rounded-md shadow-sm">
                            {incomeType.map((item, idx) => {
                                return (
                                    <Button
                                        key={idx}
                                        label={item.label}
                                        customStyles="bg-gray-100"
                                        active={
                                            formData.incomeType === item.value
                                        }
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setFormData({
                                                ...formData,
                                                incomeType: item.value,
                                            })
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </label>
                </div>

                <Button
                    disabled={isFormDisabled}
                    label="Calculate ->"
                    onClick={(e) => {
                        e.preventDefault()
                        setActiveStep(2)
                    }}
                />
            </form>
        </div>
    )
}

export default Income
