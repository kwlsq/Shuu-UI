import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';

export const register = (username,password) => {
    return(dispatch)=>{
        // axios.post(API_URL_1+'/users/register',data)
        // .then((res)=>{
        //     console.log(res.data)
        // })




        console.log('Global State : ',username,password)
        dispatch({
            type: 'LOGIN',
            payload: {
                username,
                password
            }
        })
    }
}