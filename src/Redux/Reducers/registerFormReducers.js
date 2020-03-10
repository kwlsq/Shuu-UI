import { INPUT_TEXT, REGISTER_SUCCESS } from '../Actions/types';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confPassword: '',
    checkLength: false,
    numberRegex: false,
    spcCharRegex: false,
    showErr: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return { ...state, [action.payload.prop]: action.payload.value }
        case REGISTER_SUCCESS:
            return { INITIAL_STATE }
        default:
            return state
    }
}