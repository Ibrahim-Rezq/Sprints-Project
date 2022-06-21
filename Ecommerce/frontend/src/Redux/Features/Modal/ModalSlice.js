import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isModalOpen: false,
    modalContent: '',
    modalError: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isModalOpen = true
            state.modalContent = action.payload.content
            state.modalError = action.payload.error
        },
        closeModal: (state) => {
            state.isModalOpen = false
            state.modalError = false
            state.modalContent = ''
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
export const modalState = (state) => state.modal

export default modalSlice.reducer
