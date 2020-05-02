import axios from "axios"
import {
    SHOW_OFFICIAL_STORES
} from '../Actions/types'
import { API_URL_HEROKU } from "../../Helpers/apiurl"


export const getAllBrands = () => {
    return (dispatch) => {
        axios.get(API_URL_HEROKU + '/brands/lists')
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

export const getBrandsDetail = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_HEROKU + `brads/detail/${id}`)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
}