import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';
import {
    LOGIN,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from '../Actions/types'
export const register = (obj) => {
    return (dispatch) => {
        axios.get(API_URL_1 + `/users/${obj.username}`)
            .then((res) => {
                if (res.data.length === 0) {
                    axios.post(API_URL_1 + '/users/register', obj)
                        .then((res) => {
                            console.log(res.data.id)
                            console.log(res.data.token)
                            alert('Register Success!')
                            dispatch({
                                type: LOGIN,
                                payload: res.data
                            })
                            dispatch({
                                type: REGISTER_SUCCESS
                            })
                        }).catch((err) => {
                            console.log(err.response.data)
                            dispatch({
                                type: REGISTER_FAIL
                            })
                        })
                } else {
                    alert('Username has been taken')
                }
            }).catch((err) => {
                console.log(err.response.data)
            })
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/users/login', { username, password })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: LOGIN,
                    payload: res.data
                })
            }).catch((err) => {
                alert('Username or Password Incorrect')
                localStorage.removeItem('token')
                dispatch({
                    type: LOGOUT
                })
            })
    }
}

export const keepLogin = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        console.log('masukkeeplogin', token)
        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios.get(API_URL_1 + '/users/keeplogin', headers)
            .then((res) => {
                dispatch({
                    type: LOGIN,
                    payload: res.data
                })
            }).catch((err) => {
                console.log(err.response)
                dispatch({
                    type: LOGOUT
                })
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch({
            type: LOGOUT
        })
    }
}

export const verify = (username, password) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/users/verify', { username, password })
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: REGISTER_SUCCESS
                })
            }).catch((err) => {
                console.log(err.response.data)
                dispatch({
                    type: REGISTER_FAIL
                })
            })
    }
}