import {
    OPEN_TABLE_USER,
    OPEN_TABLE_TRANSACTION,

} from '../Actions/types';

const INITIAL_STATE = {
    openTableUser: true,
    openTableTransaction: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_TABLE_USER:
            return { INITIAL_STATE, openTableUser: true }
        case OPEN_TABLE_TRANSACTION:
            return { INITIAL_STATE, openTableTransaction: true }
        default:
            return state
    }
}