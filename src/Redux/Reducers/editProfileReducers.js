import {
    ADD_PROFILE_PICTURE,
    UPLOAD_PROFPIC_SUCCESS,
    OPEN_EDIT_PROFILE,
    EDIT_PROFILE_SAVED,
    EDIT_FIRST_NAME,
    EDIT_LAST_NAME,
    EDIT_BIRTH_DATE,
    EDIT_GENDER,
    GET_PROVINCE,
    GET_CITY,
    EDIT_PROVINCE,
    // EDIT_EMAIL,
    EDIT_CITY,
    EDIT_ADDRESS_DETAIL,
    EDIT_PROFILE_SUCCESS,
    CLOSE_EDIT_PROFILE
} from '../Actions/types'

const INITIAL_STATE = {
    image: null,
    firstNameEdit: '',
    lastNameEdit: '',
    birthDateEdit: '',
    genderEdit: '',
    // emailEdit: '',
    provinceEdit: '',
    cityEdit: '',
    addressDetailEdit: '',
    openEdit: false,
    provinceList: null,
    cityList: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PROFILE_PICTURE:
            return { ...state, image: action.payload }
        case UPLOAD_PROFPIC_SUCCESS:
            return { INITIAL_STATE }
        case OPEN_EDIT_PROFILE:
            return { ...state, openEdit: true }
        case CLOSE_EDIT_PROFILE:
            return { ...state, openEdit: false }
        case EDIT_PROFILE_SAVED:
            return { INITIAL_STATE }
        case EDIT_FIRST_NAME:
            return { ...state, firstNameEdit: action.payload }
        case EDIT_LAST_NAME:
            return { ...state, lastNameEdit: action.payload }
        case EDIT_BIRTH_DATE:
            return { ...state, birthDateEdit: action.payload }
        case EDIT_GENDER:
            return { ...state, genderEdit: action.payload }
        case GET_PROVINCE:
            console.log(action.payload)
            return { ...state, provinceList: action.payload }
        case GET_CITY:
            console.log(action.payload)
            return { ...state, cityList: action.payload }
        case EDIT_PROVINCE:
            console.log(action.payload)
            return { ...state, provinceEdit: action.payload }
        // case EDIT_EMAIL:
        //     return { ...state, emailEdit: action.payload }
        case EDIT_CITY:
            console.log('masuk sini boi')
            return { ...state, cityEdit: action.payload }
        case EDIT_ADDRESS_DETAIL:
            return { ...state, addressDetailEdit: action.payload }
        case EDIT_PROFILE_SUCCESS:
            return { INITIAL_STATE }
        default:
            return state
    }
}