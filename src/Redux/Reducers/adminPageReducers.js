import {
    OPEN_TABLE_USER,
    OPEN_TABLE_TRANSACTION,
    GET_ALL_TRANSACTION,
    ADMIN_CONFIRMATION
} from '../Actions/types';

const INITIAL_STATE = {
    openTableUser: true,
    openTableTransaction: false,
    tableTransaction: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_TABLE_USER:
            return { ...state, openTableTransaction: false, openTableUser: true }
        case OPEN_TABLE_TRANSACTION:
            return { ...state, openTableUser: false, openTableTransaction: true }
        case GET_ALL_TRANSACTION:
            console.log(action.payload)
            return { ...state, tableTransaction: action.payload }
        case ADMIN_CONFIRMATION:
            return { ...state, tableTransaction: action.payload }
        default:
            return state
    }
}