import {
    SHOW_SHOWCASE_PRODUCTS,
    SHOW_PRODUCT_DETAIL,
} from '../Actions/types'
const INITIAL_STATE = {
    showcase: [],
    productDetail: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_SHOWCASE_PRODUCTS:
            return { ...state, showcase: action.payload }
        case SHOW_PRODUCT_DETAIL:
            console.log(action.payload)
            return { ...state, productDetail: action.payload }
        default:
            return state
    }
}