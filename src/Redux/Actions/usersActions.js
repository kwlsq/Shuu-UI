import axios from 'axios';
import { API_URL_1 } from '../../Helpers/apiurl';
import {
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    SHOW_USER_TABLE,
    SHOW_USER_DETAIL
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
                                type: LOGIN_SUCCESS,
                                payload: res.data
                            })
                            dispatch({
                                type: REGISTER_SUCCESS
                            })
                        }).catch((err) => {
                            console.log(err)
                            dispatch({
                                type: REGISTER_FAIL
                            })
                        })
                } else {
                    alert('Username has been taken')
                }
            }).catch((err) => {
                console.log(err)
            })
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/users/login', { username, password })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
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
        // console.log('masukkeeplogin', token)
        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios.get(API_URL_1 + '/users/keeplogin', headers)
            .then((res) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            }).catch((err) => {
                console.log(err)
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
                console.log(err)
                dispatch({
                    type: REGISTER_FAIL
                })
            })
    }
}

export const getUsersData = () => {
    return (dispatch) => {
        var token = localStorage.getItem('token')
        console.log('masuk ke usersdata')
        axios.get(API_URL_1 + '/users', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            dispatch({
                type: SHOW_USER_TABLE,
                payload: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const getUserDetail = () => {
    return async (dispatch) => {
        try {
            console.log('masukgetuserdetail')
            var token = await localStorage.getItem('token')
            const options = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const res = await axios.put(API_URL_1 + '/users/profile', {}, options)
            console.log(res.data)
            dispatch({
                type: SHOW_USER_DETAIL,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }

    }
}

