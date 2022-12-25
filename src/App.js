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

    return (
        <div className="h-screen flex justify-center md:pt-56">
            <div className="max-w-[700px] w-full p-4">
                <Steps activeStep={activeStep} setActiveStep={setActiveStep} />

                <h2 className="text-3xl mb-4 pt-8">Income tax calculator</h2>
                {/* we could have this as part of the routes, if we would need it in the URL */}
                {activeStep === 1 ? (
                    <Income
                        formData={formData}
                        setFormData={setFormData}
                        setActiveStep={setActiveStep}
                    />
                ) : (
                    <IncomeDetails />
                )}
            </div>
        </div>
    )
}

export default App
