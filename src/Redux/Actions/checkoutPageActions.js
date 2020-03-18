import {
    OPEN_PAYMENT_DIALOG,
    CLOSE_PAYMENT_DIALOG,
    STORE_PAYMENT_RECEIPT
} from './types';
import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';

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

export const uploadReceipt = (image, payment) => {
    return async (dispatch) => {
        try {
            console.log('masuk action upload image', image)
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

            const res = await axios.post(API_URL_1 + '/transaction/receipt', formData, options)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
}