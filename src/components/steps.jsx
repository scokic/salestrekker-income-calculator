import React from "react"
import InfoSvg from "../icons/info.svg"
import CardSvg from "../icons/card.svg"

const Steps = ({ activeStep, setActiveStep, disabledStep }) => {
    const steps = [
        {
            id: 1,
            icon: InfoSvg,
            title: "Income details",
        },
        {
            id: 2,
            icon: CardSvg,
            title: "Income",
        },
    ]

    return (
        <div className="grid grid-cols-2 w-full divide-x divide-gray-200 overflow-hidden rounded-md border border-gray-200 text-sm text-gray-500 cursor-pointer">
            {steps.map((step) => {
                return (
                    <button
                        disabled={disabledStep}
                        className={`flex items-center justify-center p-4"  ${
                            step.id === activeStep &&
                            "bg-green-200 border border-green-200"
                        }`}
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                    >
                        <div className="w-10 aspect-square">
                            <step.icon />
                        </div>

                        <p className="ml-4">{step.title}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default Steps
