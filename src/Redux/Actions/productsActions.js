import {
    SHOW_SHOWCASE_PRODUCTS,
    SHOW_PRODUCT_DETAIL,
    SHOW_PRODUCT_COLOR,
    SHOW_PRODUCT_SIZE,
    ONCHANGE_SIZE,
    ONCHANGE_QTY,
    PRODUCT_BY_SIZE,
    CLOSE_DIALOG,
    REDIRECT_TO_CART,
    OPEN_DIALOG,
    STOP_REDIRECT_TO_CART,
    GET_MEN_PRODUCTS,
    GET_WOMEN_PRODUCTS,
    LOAD_MORE_PRODUCTS,
    HIDE_LOAD_MORE,
    SEARCH_PRODUCT,
    FILTER_PRICE,
    LOADING_PRODUCTS
} from '../Actions/types';
import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';

export const showShowcaseProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_PRODUCTS })
            const res = await axios.get(API_URL_1 + `/products/showcase`)
            console.log(res.data)
            dispatch({
                type: SHOW_SHOWCASE_PRODUCTS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const showProductDetail = (id) => {
    return async (dispatch) => {
        try {
            console.log(id)
            const res = await axios.post(API_URL_1 + `/products/detailproduct`, { id })
            console.log(res.data, 'showproductdetail')
            dispatch({
                type: SHOW_PRODUCT_DETAIL,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const showAvailableColor = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(API_URL_1 + `/products/availcolor`, { id })
            dispatch({
                type: SHOW_PRODUCT_COLOR,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const showAvailableSize = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(API_URL_1 + `/products/availsize`, { id })
            dispatch({
                type: SHOW_PRODUCT_SIZE,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const onChangeSize = (size, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ONCHANGE_SIZE,
                payload: size
            })
            console.log(size, id, 'actionnyaaaaaa')
            const res = await axios.post(API_URL_1 + `/products/detailproductbysize`, { size, id })
            console.log(res.data, 'isinya')
            dispatch({
                type: PRODUCT_BY_SIZE,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }

}

export const onChangeQty = (qty) => {
    console.log('masuk3')
    return {
        type: ONCHANGE_QTY,
        payload: qty
    }
}

export const closeDialog = () => {
    return { type: CLOSE_DIALOG }
}

export const redirectToCart = () => {
    return { type: REDIRECT_TO_CART }
}
export const openDialog = () => {
    return { type: OPEN_DIALOG }
}
export const stopRedirectToCart = () => {
    return { type: STOP_REDIRECT_TO_CART }
}

export const getMenProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_1 + `/products/men`)
            dispatch({
                type: GET_MEN_PRODUCTS,
                payload: res.data
            })
            console.log(res.data, 'mens')
        } catch (err) {
            console.log(err)
        }
    }
}
export const getWomenProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_1 + `/products/women`)
            dispatch({
                type: GET_WOMEN_PRODUCTS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const loadMore = (length) => {
    return async (dispatch) => {
        try {
            console.log(length, 'lenghththth')
            const res = await axios.put(API_URL_1 + `/products/more`, { length })
            console.log(res.data)
            console.log(res.data.length)
            if (res.data.length === 0) {
                dispatch({ type: HIDE_LOAD_MORE })
            } else {
                dispatch({
                    type: LOAD_MORE_PRODUCTS,
                    payload: res.data
                })

            }

        } catch (err) {
            console.log(err)
        }
    }
}

export const searchProduct = (productName, page) => {
    return async (dispatch) => {
        try {
            console.log(productName, 'search')
            if (productName === '%20') {
                productName = ''
            }
            console.log(page, 'xxx')
            page = page - 1
            console.log(productName, 'yyy')
            const res = await axios.put(API_URL_1 + `/products/search`, { productName, page })
            console.log(res.data)
            dispatch({
                type: SEARCH_PRODUCT,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const priceFilter = (min, max) => {
    return async (dispatch) => {
        const res = await axios.put(API_URL_1 + '/products/filterprice', { min, max })
        console.log(res)
        dispatch({
            type: FILTER_PRICE,
            payload: res.data
        })
    }
}