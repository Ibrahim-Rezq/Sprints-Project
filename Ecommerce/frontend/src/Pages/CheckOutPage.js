import React, { useState } from 'react'
import ProcedeToCheckOut from '../Components/Cart/ProcedeToCheckOut'
import PaymentConfirmation from '../Payment/PaymentConfirmation'
import { Route, Routes } from 'react-router-dom'
function CheckOutPage() {
    const [formData, setFormData] = useState({
        number: '33577892',
        paymentMethod: 'Credit Card',
        firstName: 'Seif',
        lastName: 'Omran',
        address: 'Obour City',
        phone: '01099662420',
        amount: 10999,
    })
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <ProcedeToCheckOut
                        formData={formData}
                        setFormData={setFormData}
                    />
                }
            />
            <Route
                path='/confirmation'
                element={<PaymentConfirmation order={formData} />}
            />
        </Routes>
    )
}

export default CheckOutPage
