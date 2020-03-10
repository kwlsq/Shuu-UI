import {
    SHOW_SHOWCASE_PRODUCTS,
    SHOW_PRODUCT_DETAIL,
    SHOW_PRODUCT_COLOR,
    SHOW_PRODUCT_SIZE
} from '../Actions/types'
const INITIAL_STATE = {
    showcase: [],
    productDetail: [],
    availColor: [],
    availSize: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_SHOWCASE_PRODUCTS:
            return { ...state, showcase: action.payload }
        case SHOW_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload }
        case SHOW_PRODUCT_COLOR:
            return { ...state, availColor: action.payload }
        case SHOW_PRODUCT_SIZE:
            return { ...state, availSize: action.payload }
        default:
            return state
    }
}