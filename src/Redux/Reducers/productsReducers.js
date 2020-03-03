import {
    SHOW_SHOWCASE_PRODUCTS
} from '../Actions/types'
const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_SHOWCASE_PRODUCTS:
            return action.payload
        default:
            return state
    }
}