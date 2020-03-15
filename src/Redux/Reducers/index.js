import { combineReducers } from "redux";
import userReducers from "./userReducers";
import loginFormReducers from "./loginFormReducers";
import registerFormReducers from "./registerFormReducers";
import brandsReducers from "./brandsReducers";
import adminTablesReducers from "./adminTablesReducers";
import productsReducers from "./productsReducers";
import productDetailInputReducers from "./productDetailInputReducers";
import editProfileReducers from "./editProfileReducers";
import transactionReducers from "./transactionReducers";
import cartPageInputReducers from "./cartPageInputReducers";


export default combineReducers({
    user: userReducers,
    loginForm: loginFormReducers,
    registerForm: registerFormReducers,
    brands: brandsReducers,
    tableAdmin: adminTablesReducers,
    products: productsReducers,
    productDetail: productDetailInputReducers,
    editProfileInputs: editProfileReducers,
    transaction: transactionReducers,
    cartPage: cartPageInputReducers
})