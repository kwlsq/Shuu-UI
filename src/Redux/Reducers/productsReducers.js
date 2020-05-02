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
    SEARCH_PRODUCT,
    FILTER_PRICE,
    LOADING_PRODUCTS
} from '../Actions/types'
const INITIAL_STATE = {
    showcase: [],
    allProduct: [],
    productDetail: [],
    availColor: [],
    availSize: [],
    hideButton: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_SHOWCASE_PRODUCTS:
            console.log('udah ga loading')
            return { ...state, showcase: action.payload, loading: false }
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
            return { ...state, showcase: action.payload.results2, allProduct: action.payload.results }
        case FILTER_PRICE:
            console.log(action.payload)
            return { ...state, showcase: action.payload }
        case LOADING_PRODUCTS:
            console.log('LOADINGGGGGGGG')
            return { ...state, loading: true }
        default:
            return state
    }
}