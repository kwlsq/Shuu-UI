import {
    GET_TOTAL_PAYMENT,
    UPDATE_TOTAL_PAYMENT
} from '../Actions/types';

const INITIAL_STATE = {
    totalPayment: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOTAL_PAYMENT:
            console.log(action.payload, 'reducer')
            return { ...state, totalPayment: action.payload }
        case UPDATE_TOTAL_PAYMENT:
            return { ...state, totalPayment: action.payload }
        default:
            return state
    }
}