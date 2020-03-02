import { combineReducers } from "redux";
import userReducers from "./userReducers";
import loginFormReducers from "./loginFormReducers";
import registerFormReducers from "./registerFormReducers";
import brandsReducers from "./brandsReducers";
import adminTablesReducers from "./adminTablesReducers";


export default combineReducers({
    user: userReducers,
    loginForm: loginFormReducers,
    registerForm: registerFormReducers,
    brands: brandsReducers,
    tableAdmin: adminTablesReducers
})