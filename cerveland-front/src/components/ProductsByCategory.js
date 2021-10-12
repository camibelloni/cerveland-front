import React from 'react'
import './ProductsByCategory.css'

export default function ProductsByCategory({title, count}) {
    return (
        <div>
                     <div className="product-by-category">
                         <h3>{title}</h3>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{count}</div>
                    </div>
        </div>
    )
}
