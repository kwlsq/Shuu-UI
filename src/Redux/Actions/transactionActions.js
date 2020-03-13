import axios from 'axios';

import {
    ADD_TO_CART_SUCCESS
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
            console.log(res.data)
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}


