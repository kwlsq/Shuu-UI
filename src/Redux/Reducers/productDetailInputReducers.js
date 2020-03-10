import {
    ONCHANGE_SIZE,
    ONCHANGE_QTY,
    ADD_TO_CART_SUCCESS
} from '../Actions/types'

const INITIAL_STATE = {
    size: '',
    qty: 0,
    deliveryCost: 0,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ONCHANGE_SIZE:
            console.log('masuk cengsais')
            return { ...state, size: action.payload }
        case ONCHANGE_QTY:
            console.log('masuk CENGQTY', action.payload)
            return { ...state, qty: action.payload }
        case ADD_TO_CART_SUCCESS:
            return INITIAL_STATE
        default:
            return state
    }
}