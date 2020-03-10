import { INPUT_TEXT, REGISTER_FAIL } from '../Actions/types'

export const onRegisterText = (prop, value) => {
    return {
        type: INPUT_TEXT,
        payload: {
            prop,
            value
        }
    }
}
export const removeRedirect = () => {
    return {
        type: REGISTER_FAIL
    }
}