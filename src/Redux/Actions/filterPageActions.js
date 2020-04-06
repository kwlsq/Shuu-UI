import {
    MIN_PRICE_FILTER,
    MAX_PRICE_FILTER
} from './types'


export const minPriceFilter = (min) => {
    return {
        type: MIN_PRICE_FILTER,
        payload: min
    }
}
export const maxPriceFilter = (max) => {
    return {
        type: MAX_PRICE_FILTER,
        payload: max
    }
}
