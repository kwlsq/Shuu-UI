import {
    ADD_PROFILE_PICTURE, UPLOAD_PROFPIC_SUCCESS
} from '../Actions/types'

const INITIAL_STATE = {
    image: null,

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PROFILE_PICTURE:
            return { ...state, image: action.payload }
        case UPLOAD_PROFPIC_SUCCESS:
            console.log(action.payload, 'UPLOAD SUKSES REDUCER')
            return { INITIAL_STATE }
        default:
            return state
    }
}