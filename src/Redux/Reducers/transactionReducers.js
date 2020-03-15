import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    GET_CART,
    CHANGE_QTY_CART,
    DELETE_ALL_SUCCESS,
    DELETE_ITEM_SUCCESS
} from '../Actions/types'

const INITIAL_STATE = {
    cart: [],
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            return { ...state, cart: action.payload, errror: '' }
        case ADD_TO_CART_FAIL:
            return { ...state, error: action.payload }
        case GET_CART:
            return { ...state, cart: action.payload }
        case CHANGE_QTY_CART:
            return { ...state, cart: action.payload }
        case DELETE_ALL_SUCCESS:
            return INITIAL_STATE
        case DELETE_ITEM_SUCCESS:
            return { ...state, cart: action.payload }
        default:
            return state
    }
}