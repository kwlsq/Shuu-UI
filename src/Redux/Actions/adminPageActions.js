import {
    OPEN_TABLE_USER,
    OPEN_TABLE_TRANSACTION,
    GET_ALL_TRANSACTION,
    ADMIN_CONFIRMATION
} from './types';
import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';

export const openTableUser = () => {
    return { type: OPEN_TABLE_USER }
}

export const openTableTransaction = () => {
    return { type: OPEN_TABLE_TRANSACTION }
}

export const getAllTransactions = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_1 + '/transaction')
            console.log(res.data)
            dispatch({
                type: GET_ALL_TRANSACTION,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const adminConfirmation = (t_id) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(API_URL_1 + '/transaction/confirmation', { t_id })
            console.log(res.data)
            dispatch({
                type: ADMIN_CONFIRMATION,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}