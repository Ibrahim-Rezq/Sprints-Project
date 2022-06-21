import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal, error }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 1500)
    })
    return (
        <div
            className='modal d-block  text-center'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header justify-content-center'>
                        <h5
                            className={
                                'modal-title text-' +
                                (error ? 'danger' : 'success')
                            }
                            id='exampleModalLabel'
                        >
                            {error ? 'Error' : 'Success'}
                        </h5>
                    </div>
                    <div
                        className={
                            'modal-body lead text-' +
                            (error ? 'danger' : 'success')
                        }
                    >
                        {modalContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
