import {
    OPEN_PAYMENT_DIALOG,
    CLOSE_PAYMENT_DIALOG,
    STORE_PAYMENT_RECEIPT
} from '../Actions/types'

const INITIAL_STATE = {
    openDialog: false,
    paymentReceipt: null
}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_PAYMENT_DIALOG:
            return { ...state, openDialog: true }
        case CLOSE_PAYMENT_DIALOG:
            return { ...state, openDialog: false }
        case STORE_PAYMENT_RECEIPT:
            console.log(action.payload, 'reducer')
            return { ...state, paymentReceipt: action.payload }
        default:
            return state
    }
}