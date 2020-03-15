import axios from 'axios';

import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    OPEN_DIALOG,
    GET_CART
} from './types'
import { API_URL_1 } from '../../Helpers/apiurl';

export const addToCart = (qty, id) => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const res = await axios.post(API_URL_1 + `/transaction/addtocart`, { qty, id }, config)
            console.log(res.data, 'action transact2')
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: res.data
            })
            dispatch({ type: OPEN_DIALOG })
        } catch (err) {
            dispatch({
                type: ADD_TO_CART_FAIL,
                payload: err.response.data.error
            })
        }
    }
}

export const addToCartViaBuy = (qty, id) => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const res = await axios.post(API_URL_1 + `/transaction/addtocart`, { qty, id }, config)
            console.log(res.data, 'action transact2')
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: ADD_TO_CART_FAIL,
                payload: err.response.data.error
            })
        }
    }
}

export const getCart = () => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const res = await axios.get(API_URL_1 + `/transaction/cart`, config)
            console.log(res.data)
            dispatch({
                type: GET_CART,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getAddresses = () => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        } catch (err) {

        }
    }
}

export const getOngkir = () => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        } catch (err) {
            console.log(err, 'gagal cek ongkir')
        }
    }
}

