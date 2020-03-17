import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    GET_CART,
    CHANGE_QTY_CART,
    DELETE_ALL_SUCCESS,
    DELETE_ITEM_SUCCESS,
    GET_USER_ADDRESS,
    GET_ONGKIR
} from '../Actions/types'

const INITIAL_STATE = {
    cart: [],
    address: {},
    total_ongkir: 0,
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
        case GET_USER_ADDRESS:
            return { ...state, address: action.payload }
        case GET_ONGKIR:
            console.log(action.payload, 'aweawew')
            return { ...state, total_ongkir: action.payload }
        default:
            return state
    }
}