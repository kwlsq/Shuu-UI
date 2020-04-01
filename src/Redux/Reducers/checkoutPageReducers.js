import {
    OPEN_PAYMENT_DIALOG,
    CLOSE_PAYMENT_DIALOG,
    STORE_PAYMENT_RECEIPT,
    EDIT_ADDRESS,
    SAVE_ADDRESS,
    EDIT_DELIVERY_PROVINCE,
    EDIT_DELIVERY_CITY,
    EDIT_DELIVERY_ADDRESS
} from '../Actions/types'

const INITIAL_STATE = {
    openDialog: false,
    paymentReceipt: null,
    openEditAddress: false,
    editProvince: '',
    editCity: '',
    editCityId: 0,
    editAddress: ''
}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_PAYMENT_DIALOG:
            return { ...state, openDialog: true }
        case CLOSE_PAYMENT_DIALOG:
            return { ...state, openDialog: false }
        case STORE_PAYMENT_RECEIPT:
            return { ...state, paymentReceipt: action.payload }
        case EDIT_ADDRESS:
            return { ...state, openEditAddress: true }
        case SAVE_ADDRESS:
            return { ...state, openEditAddress: false }
        case EDIT_DELIVERY_PROVINCE:
            return { ...state, editProvince: action.payload.province }
        case EDIT_DELIVERY_CITY:
            console.log(action.payload, 'city reducer')
            return { ...state, editCity: action.payload.city_name, editCityId: action.payload.city_id }
        case EDIT_DELIVERY_ADDRESS:
            return { ...state, editAddress: action.payload }
        default:
            return state
    }
}