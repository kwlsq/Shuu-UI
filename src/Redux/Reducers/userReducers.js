import {
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

} from '../Actions/types';

const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    verified: 0,
    role_id: 0,
    token: '',
    redirectVerify: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload }
        case LOGOUT:
            return INITIAL_STATE
        case REGISTER_SUCCESS:
            return { ...state, redirectVerify: true }
        case REGISTER_FAIL:
            return { ...state, redirectVerify: false }
        default:
            return state
    }
}