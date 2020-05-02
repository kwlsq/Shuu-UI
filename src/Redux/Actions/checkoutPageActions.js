import {
    OPEN_PAYMENT_DIALOG,
    CLOSE_PAYMENT_DIALOG,
    STORE_PAYMENT_RECEIPT,
    EDIT_ADDRESS,
    SAVE_ADDRESS,
    EDIT_DELIVERY_PROVINCE,
    EDIT_DELIVERY_CITY,
    EDIT_DELIVERY_ADDRESS
} from './types';
import axios from 'axios';
import { API_URL_HEROKU } from '../../Helpers/apiurl';

export const onClickButtonPayment = () => {
    return { type: OPEN_PAYMENT_DIALOG }
}

export const closeDialogPayment = () => {
    return { type: CLOSE_PAYMENT_DIALOG }
}

export const storePaymentReceipt = (image) => {
    return {
        type: STORE_PAYMENT_RECEIPT,
        payload: image
    }
}

export const uploadReceipt = (image, payment, province, city, address) => {
    return async (dispatch) => {
        try {
            console.log('masuk action upload image', image)
            console.log(image, payment, province, city, address, 'action')
            const token = await localStorage.getItem('token')
            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }

            console.log(payment, 'moliatini')
            const formData = await new FormData();
            formData.append('image', image)
            formData.append('total_price', payment)
            formData.append('province', province)
            formData.append('city', city)
            formData.append('address', address)

            const res = await axios.post(API_URL_HEROKU + '/transaction/receipt', formData, options)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
}

export const editAddress = () => {
    return { type: EDIT_ADDRESS }
}
export const saveAddress = () => {
    return { type: SAVE_ADDRESS }
}

export const onChangeDeliveryProvince = (val) => {
    console.log(val, 'provinceeeee')
    return {
        type: EDIT_DELIVERY_PROVINCE,
        payload: val
    }
}
export const onChangeDeliveryCity = (val) => {
    console.log(val, 'cityyyyyy')
    return {
        type: EDIT_DELIVERY_CITY,
        payload: val
    }
}
export const onChangeDeliveryAddress = (val) => {
    console.log(val, 'addresssss')
    return {
        type: EDIT_DELIVERY_ADDRESS,
        payload: val
    }
}