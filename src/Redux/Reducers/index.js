import { combineReducers } from "redux";
import userReducers from "./userReducers";
import loginFormReducers from "./loginFormReducers";
import registerFormReducers from "./registerFormReducers";

export default combineReducers({
    user: userReducers,
    loginForm: loginFormReducers,
    registerForm: registerFormReducers
})