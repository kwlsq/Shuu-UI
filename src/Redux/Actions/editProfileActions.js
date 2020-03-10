import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';
import {
    ADD_PROFILE_PICTURE,
    UPLOAD_PROFPIC_SUCCESS
} from '../Actions/types'

export const storeImage = (image) => {
    return {
        type: ADD_PROFILE_PICTURE,
        payload: image
    }
}

export const uploadImage = ({ image }) => {
    return async (dispatch) => {
        try {
            console.log('masuk action upload image', image.name)
            const token = await localStorage.getItem('token')
            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }

            const formData = await new FormData();
            formData.append('image', image)
            formData.append('tulisan', 'tulisan')


            const res = await axios.post(API_URL_1 + '/editprofile/addprofpic', formData, options)
            // console.log(res.data)

            dispatch({
                type: UPLOAD_PROFPIC_SUCCESS
            })
        } catch (err) {
            console.log(err)
        }
    }
}