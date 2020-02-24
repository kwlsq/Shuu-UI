import { INPUT_TEXT } from '../Actions/types'

export const onRegisterText = (prop, value) => {
    return {
        type: INPUT_TEXT,
        payload: {
            prop,
            value
        }
    }
}
