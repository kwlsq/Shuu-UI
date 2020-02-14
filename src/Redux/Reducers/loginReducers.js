const INITIAL_STATE = {
    username:'',
    password:''
}

export default (state=INITIAL_STATE,action) => {
    console.log('masuk')
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'LOGIN':
            return{
                username: action.payload.username,
                password: action.payload.password
            }
        default:
            return INITIAL_STATE
    }
}