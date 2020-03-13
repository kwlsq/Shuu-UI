import {
    ONCHANGE_SIZE,
    ONCHANGE_QTY,
    CLOSE_DIALOG,
    REDIRECT_TO_CART,
    OPEN_DIALOG
} from '../Actions/types'

const INITIAL_STATE = {
    size: '',
    qty: 0,
    popDialog: false,
    redirectToCart: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ONCHANGE_SIZE:
            console.log('masuk cengsais', action.payload)
            return { ...state, size: action.payload }
        case ONCHANGE_QTY:
            console.log('masuk CENGQTY', action.payload)
            return { ...state, qty: action.payload }
        case OPEN_DIALOG:
            return { ...state, popDialog: true }
        case CLOSE_DIALOG:
            return { ...state, popDialog: false }
        case REDIRECT_TO_CART:
            return { INITIAL_STATE, redirectToCart: true }
        default:
            return state
    }
}