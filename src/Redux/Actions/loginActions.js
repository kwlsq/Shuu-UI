import {
    INPUT_TEXT
} from '../Actions/types';

export const onInputText = (prop, value) => {
    console.log(prop, value)
    return {
        type: INPUT_TEXT,
        payload: {
            prop,
            value
        }
    }
}