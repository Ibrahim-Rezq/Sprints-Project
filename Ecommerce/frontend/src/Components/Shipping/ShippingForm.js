import React from 'react'
import { FormInput } from '../Global/'
import style from './css/ShippingForm.module.css'

function ShippingForm({ handleFormData }) {
    return (
        <form className='mb-4'>
            <div className='row'>
                <div
                    className={
                        'd-flex justify-content-between ' + style['name-inputs']
                    }
                >
                    <FormInput
                        inputType='text'
                        inputId='shipping-fname'
                        label='First Name'
                        inputName={'firstName'}
                        inputFunc={handleFormData}
                    ></FormInput>
                    <FormInput
                        inputType='text'
                        inputId='shipping-lname'
                        label='Last Name'
                        inputName={'lastName'}
                        inputFunc={handleFormData}
                    ></FormInput>
                </div>

                <FormInput
                    inputType='text'
                    inputId='shipping-address'
                    label='address'
                    inputName={'address'}
                    inputFunc={handleFormData}
                ></FormInput>
                <FormInput
                    inputType='number'
                    inputId='phone-number'
                    label='phone'
                    inputName={'phone'}
                    inputFunc={handleFormData}
                ></FormInput>
                <FormInput
                    inputType='text'
                    inputId='shipping-notes'
                    label='Shipping Notes'
                ></FormInput>
            </div>
        </form>
    )
}

export default ShippingForm
