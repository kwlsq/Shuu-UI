import {
    LOGIN,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SHOW_USER_TABLE
} from '../Actions/types';

const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    verified: 0,
    id_role: 0,
    token: '',
    redirectVerify: false,
    tableUser: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                verified: action.payload.verified,
                id_role: action.payload.id_role,
                token: action.payload.token
            }
        case LOGOUT:
            return INITIAL_STATE
        case REGISTER_SUCCESS:
            return { ...state, redirectVerify: true }
        case REGISTER_FAIL:
            return { ...state, redirectVerify: false }
        case SHOW_USER_TABLE:
            return { ...state, tableUser: action.payload }
        default:
            return INITIAL_STATE
    }
}