import {
    SHOW_SHOWCASE_PRODUCTS,
    SHOW_PRODUCT_DETAIL,
} from '../Actions/types';
import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';

export const showShowcaseProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_1 + `/products/showcase`)
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
            console.log(res.data)
            dispatch({
                type: SHOW_PRODUCT_DETAIL,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
