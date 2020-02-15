import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';

export const register = (obj) => {
    return(dispatch)=>{
        axios.get(API_URL_1+`/users/register/${obj.username}`)
        .then((res)=>{
            console.log('hasilnya nihhhh:',res.data)
            if(res.data.length===0){
                alert('aman')
            } else {
                alert('Username has been taken')
            }
        }).catch((err)=>{
            console.log(err.response.data)
        })

        // console.log('Global State : ',username,password)
        // dispatch({
        //     type: 'LOGIN',
        //     payload: {
        //         username,
        //         password
        //     }
        // })
    }
}