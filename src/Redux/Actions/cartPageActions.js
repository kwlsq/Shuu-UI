import {
    CHANGE_QTY_CART,
    GET_TOTAL_PAYMENT,
    DELETE_ALL_SUCCESS,
    DELETE_ITEM_SUCCESS,
    UPDATE_TOTAL_PAYMENT
} from './types';
import axios from 'axios';
import { API_URL_HEROKU } from '../../Helpers/apiurl';


export const changeCartItemQty = (newQty, p_id, price) => {
    return async (dispatch) => {
        try {
            console.log(newQty, p_id)
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const res = await axios.put(API_URL_HEROKU + '/transaction/changeqty', { newQty, p_id, price }, config)
            dispatch({
                type: CHANGE_QTY_CART,
                payload: res.data.results2
            })
            res.data.results3[0].total_payment === null
                ?
                dispatch({
                    type: UPDATE_TOTAL_PAYMENT,
                    payload: 0
                })
                :
                dispatch({
                    type: UPDATE_TOTAL_PAYMENT,
                    payload: res.data.results3[0].total_payment
                })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getTotalPayment = () => {
    return async (dispatch) => {
        const token = await localStorage.getItem('token')
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const res = await axios.get(API_URL_HEROKU + '/transaction/gettotalpayment', config)
        console.log(res.data.total_payment, 'eksyen')
        dispatch({
            type: GET_TOTAL_PAYMENT,
            payload: res.data.total_payment
        })
    }
}

export const deleteAll = () => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const res = await axios.get(API_URL_HEROKU + '/transaction/deleteall', config)
            console.log(res)
            dispatch({
                type: DELETE_ALL_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteItem = (p_id) => {
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const res = await axios.put(API_URL_HEROKU + '/transaction/deleteproduct', { p_id }, config)
            console.log(res.data, 'ini yang dicek')
            dispatch({
                type: DELETE_ITEM_SUCCESS,
                payload: res.data.results2
            })
            res.data.results3[0].total_payment === null
                ?
                dispatch({
                    type: UPDATE_TOTAL_PAYMENT,
                    payload: 0
                })
                :
                dispatch({
                    type: UPDATE_TOTAL_PAYMENT,
                    payload: res.data.results3[0].total_payment
                })
        } catch (err) {
            console.log(err)
        }
    }
}