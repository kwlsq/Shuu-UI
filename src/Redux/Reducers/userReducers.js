import {
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SHOW_USER_DETAIL,
    UPLOAD_PROFPIC_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    verified: 0,
    role_id: 0,
    token: '',
    redirectVerify: false,
    userDetail: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload }
        case LOGOUT:
            return INITIAL_STATE
        case REGISTER_SUCCESS:
            return { INITIAL_STATE, redirectVerify: true }
        case REGISTER_FAIL:
            return { ...state, redirectVerify: false }
        case SHOW_USER_DETAIL:
            console.log('masuk reducernya juga')
            return { ...state, userDetail: action.payload }
        case UPLOAD_PROFPIC_SUCCESS:
            console.log(action.payload, 'UPLOAD SUKSES REDUCER')
            return { ...state, userDetail: action.payload }
        default:
            return state
    }
}