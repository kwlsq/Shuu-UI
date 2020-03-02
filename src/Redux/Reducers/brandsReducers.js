import {
    SHOW_OFFICIAL_STORES
} from '../Actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_OFFICIAL_STORES:
            return { ...state, ...action.payload }
        default:
            return state
    }
}