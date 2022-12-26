import React, { useState } from "react"
import Steps from "./components/steps"
import "./style.css"
import Income from "./components/income"
import IncomeDetails from "./components/income-details"

const App = () => {
    const [activeStep, setActiveStep] = useState(1)

    const [formData, setFormData] = useState({
        income: "",
        frequency: "weekly",
        incomeType: null,
    })

    const isFormDisabled =
        formData.incomeType === null ||
        formData.income === "" ||
        formData.income == 0
            ? true
            : false

    return (
        <div className="h-screen flex justify-center md:pt-56">
            <div className="max-w-[700px] w-full p-4">
                <Steps
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    disabledStep={isFormDisabled}
                />

                <h2 className="text-3xl mb-4 pt-8">Income tax calculator</h2>
                {activeStep === 1 ? (
                    <Income
                        formData={formData}
                        setFormData={setFormData}
                        setActiveStep={setActiveStep}
                        isFormDisabled={isFormDisabled}
                    />
                ) : (
                    <IncomeDetails formData={formData} />
                )}
            </div>
        </div>
    )
}

export default App
