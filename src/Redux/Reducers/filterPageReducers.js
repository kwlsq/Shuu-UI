import {
    MIN_PRICE_FILTER,
    MAX_PRICE_FILTER
} from '../Actions/types'

const INITIAL_STATE = {
    min: 0,
    max: 9999999999
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MIN_PRICE_FILTER:
            console.log(action.payload, 'min')
            return { ...state, min: action.payload }
        case MAX_PRICE_FILTER:
            console.log(action.payload, 'max')
            return { ...state, max: action.payload }
        default:
            return state
    }
}