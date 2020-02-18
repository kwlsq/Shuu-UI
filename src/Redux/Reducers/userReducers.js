const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    verified: 0,
    id_role: 0,
    token: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                verified: action.payload.verified,
                id_role: action.payload.id_role,
                token: action.payload.token
            }
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return INITIAL_STATE
    }
}