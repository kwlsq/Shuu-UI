import {
    SHOW_SHOWCASE_PRODUCTS
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