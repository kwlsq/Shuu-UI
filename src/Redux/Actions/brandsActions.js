import axios from "axios"
import {
    SHOW_OFFICIAL_STORES
} from '../Actions/types'
import { API_URL_1 } from "../../Helpers/apiurl"


export const getAllBrands = () => {
    return (dispatch) => {
        axios.get(API_URL_1 + '/brands/lists')
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: SHOW_OFFICIAL_STORES,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

}