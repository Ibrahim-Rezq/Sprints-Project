import React from 'react'
import { ShippingForm } from './'

function ShippingDetails({ handleFormData }) {
    return (
        <div className='shipping-details'>
            <ShippingForm handleFormData={handleFormData} />
        </div>
    )
}

export default ShippingDetails
