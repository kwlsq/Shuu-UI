import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL
} from '../Actions/types'

const INITIAL_STATE = {
    cart: [],
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            console.log(action.payload)
            return { ...state, cart: action.payload, errror: '' }
        case ADD_TO_CART_FAIL:
            console.log(action.payload)
            return { ...state, error: action.payload }
        default:
            return state
    }
}