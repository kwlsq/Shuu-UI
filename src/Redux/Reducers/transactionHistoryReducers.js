import {
    GET_TRANSACTION_DETAIL,
    CLOSE_TRANSACTION_DETAIL
} from '../Actions/types';

const INITIAL_STATE = {
    openDialogTransactionDetail: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TRANSACTION_DETAIL:
            console.log('transacthistory')
            return { ...state, openDialogTransactionDetail: true }
        case CLOSE_TRANSACTION_DETAIL:
            return INITIAL_STATE
        default:
            return state
    }
}