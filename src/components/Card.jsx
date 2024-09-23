import React from 'react'

const Card = ({ title, children }) => {
    return (
        <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden mb-4">
            <div className="px-4 py-2 bg-gray-700 border-b border-gray-600">
                <h2 className="text-lg font-semibold text-gray-100">{title}</h2>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

export default Card