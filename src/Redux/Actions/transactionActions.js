import axios from 'axios';

import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    OPEN_DIALOG,
    GET_CART,
    GET_USER_ADDRESS,
    GET_ONGKIR,
    GET_TRANSACTION,
    GET_TRANSACTION_DETAIL
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
export const getTransactionDetail = (t_id) => {
    return async (dispatch) => {
        try {
            console.log(t_id)
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const res = await axios.post(API_URL_1 + `/transaction/detail`, { t_id }, config)
            console.log(res.data)
            dispatch({
                type: GET_TRANSACTION_DETAIL,
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
            const res = await axios.post(API_URL_1 + `/users/address`, {}, config)
            console.log(res.data)
            dispatch({
                type: GET_USER_ADDRESS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getOngkir = (origin, destination, weight, courier, id) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(API_URL_1 + `/rajaongkir/ongkir`, {
                origin,
                destination,
                weight,
                courier,
                id
            })
            console.log(res.data)
            dispatch({
                type: GET_ONGKIR,
                payload: res.data.total_ongkir
            })

        } catch (err) {
            console.log(err, 'gagal cek ongkir')
        }
    }
}

export const getTransaction = () => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const res = await axios.get(API_URL_1 + `/transaction/history`, config)
            console.log(res.data)
            dispatch({
                type: GET_TRANSACTION,
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const updateStocks = (qty, p_id, size) => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const res = await axios.put(API_URL_1 + `/transaction/stock`, { qty, p_id, size }, config)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
}