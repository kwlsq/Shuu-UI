import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';
import {
    ADD_PROFILE_PICTURE,
    UPLOAD_PROFPIC_SUCCESS,
    OPEN_EDIT_PROFILE,
    EDIT_FIRST_NAME,
    EDIT_LAST_NAME,
    EDIT_BIRTH_DATE,
    EDIT_GENDER,
    GET_PROVINCE,
    GET_CITY,
    EDIT_PROVINCE,
    // EDIT_EMAIL,
    EDIT_CITY,
    EDIT_ADDRESS_DETAIL,
    CLOSE_EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS
} from '../Actions/types'

export const storeImage = (image) => {
    return {
        type: ADD_PROFILE_PICTURE,
        payload: image
    }
}

export const uploadImage = ({ image }, ud_id) => {
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
            console.log('image')
            formData.append('image', image)
            formData.append('ud_id', ud_id)


            const res = await axios.post(API_URL_1 + '/editprofile/addprofpic', formData, options)
            console.log(res.data)

            dispatch({
                type: UPLOAD_PROFPIC_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
            alert('only .jpg, .jpeg, .png file type are allowed ')
        }
    }
}

export const onClickBtnEditProfile = () => {
    return { type: OPEN_EDIT_PROFILE }
}



export const onChangeEditFirstName = (val) => {
    return {
        type: EDIT_FIRST_NAME,
        payload: val
    }
}

export const onChangeEditLastName = (val) => {
    return {
        type: EDIT_LAST_NAME,
        payload: val
    }
}

export const onChangeEditBirthDate = (val) => {
    return {
        type: EDIT_BIRTH_DATE,
        payload: val
    }
}

export const onChangeGender = (val) => {
    return {
        type: EDIT_GENDER,
        payload: val
    }
}

// export const onChangeEditEmail = (val) => {
//     return {
//         type: EDIT_EMAIL,
//         payload: val
//     }
// }

export const getProvinceLists = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_1 + '/rajaongkir/province')
            console.log('asik dah')
            dispatch({
                type: GET_PROVINCE,
                payload: res.data
            })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
}

export const onChangeEditProvince = (val) => {
    return {
        type: EDIT_PROVINCE,
        payload: val
    }
}

export const getCityLists = (id) => {
    console.log(id)
    return async (dispatch) => {
        try {
            if (id) {
                const res = await axios.get(API_URL_1 + `/rajaongkir/city/${id}`)
                dispatch({
                    type: GET_CITY,
                    payload: res.data
                })
            } else {
                const res = await axios.get(API_URL_1 + `/rajaongkir/city`)
                dispatch({
                    type: GET_CITY,
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const onChangeEditCity = (val) => {
    return {
        type: EDIT_CITY,
        payload: val
    }
}

export const onChangeEditAddressDetail = (val) => {
    return {
        type: EDIT_ADDRESS_DETAIL,
        payload: val
    }
}

export const onBtnSaveEdit = (detail, ud_id) => {
    console.log(detail)
    return async (dispatch) => {
        try {
            const token = await localStorage.getItem('token')
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const res = await axios.post(API_URL_1 + `/editprofile/updateprofile/${ud_id}`, detail, config)
            console.log(res.data)
            dispatch({
                type: EDIT_PROFILE_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const onBtnCancelEdit = () => {
    return { type: CLOSE_EDIT_PROFILE }
}