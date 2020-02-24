import {
    INPUT_TEXT
} from '../Actions/types';

const INITIAL_STATE = {
    username: '',
    password: '',
    hidePass: true,
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            console.log('masuk reducer', action)
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state
    }
}