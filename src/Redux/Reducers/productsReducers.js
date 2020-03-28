import {
    SHOW_SHOWCASE_PRODUCTS,
    SHOW_PRODUCT_DETAIL,
    SHOW_PRODUCT_COLOR,
    SHOW_PRODUCT_SIZE,
    PRODUCT_BY_SIZE,
    GET_WOMEN_PRODUCTS,
    GET_MEN_PRODUCTS,
    LOAD_MORE_PRODUCTS,
    HIDE_LOAD_MORE,
    SEARCH_PRODUCT
} from '../Actions/types'
const INITIAL_STATE = {
    showcase: [],
    productDetail: [],
    availColor: [],
    availSize: [],
    hideButton: false
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
        case PRODUCT_BY_SIZE:
            return { ...state, productDetail: action.payload }
        case GET_MEN_PRODUCTS:
            return { ...state, showcase: action.payload }
        case GET_WOMEN_PRODUCTS:
            console.log(action.payload)
            return { ...state, showcase: action.payload }
        case LOAD_MORE_PRODUCTS:
            console.log(state.showcase)
            return { ...state, showcase: [...state.showcase, ...action.payload] }
        case HIDE_LOAD_MORE:
            return { ...state, hideButton: true }
        case SEARCH_PRODUCT:
            console.log(action.payload)
            return { ...state, showcase: action.payload }
        default:
            return state
    }
}