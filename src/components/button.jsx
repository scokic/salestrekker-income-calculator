import React from "react"

const Button = ({ label, disabled, onClick, customStyles, active }) => {
    return (
        <button
            disabled={disabled}
            className={`border w-full py-2 px-4 rounded ${
                disabled
                    ? "bg-gray-100 cursor-not-allowed"
                    : `${
                          customStyles || "bg-green-500 text-white"
                      } cursor-pointer`
            }
            ${active ? "bg-green-500 text-white" : "bg-gray-100"}
            `}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button
