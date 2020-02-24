import { INPUT_TEXT } from '../Actions/types';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confPassword: '',
    checkLength: false,
    numberRegex: false,
    spcCharRegex: false,
    showErr: false,
    error: '',
    loading: '',
    hidePass: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state
    }
}