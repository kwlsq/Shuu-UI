import axios from 'axios';

import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL

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
        } catch (err) {

            dispatch({
                type: ADD_TO_CART_FAIL,
                payload: err.response.data.error
            })
            // return alert(err.response.data.error)
        }
    }
}


