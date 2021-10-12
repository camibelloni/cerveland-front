import React from 'react'
import './TotalCard.css';

export default function TotalCard({ title, quantity }) {
    return (
        <div>
            <div className="total-products-container">
                <h3>{title}</h3>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{quantity}</div>
            </div>
        </div>
    )
}
