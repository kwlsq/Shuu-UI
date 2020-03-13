import { ADD_TO_CART_SUCCESS } from '../Actions/types'

const INITIAL_STATE = {
    cart: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            return { ...state, cart: action.payload }
        default:
            return state
    }
}