import {
    SHOW_USER_TABLE
} from '../Actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_USER_TABLE:
            return action.payload
        default:
            return state
    }
}