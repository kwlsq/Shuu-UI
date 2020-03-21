import {
    OPEN_TABLE_USER,
    OPEN_TABLE_TRANSACTION,
} from './types';

export const openTableUser = () => {
    return { type: OPEN_TABLE_USER }
}

export const openTableTransaction = () => {
    return { type: OPEN_TABLE_TRANSACTION }
}
