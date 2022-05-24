import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";

const allReducer = combineReducers({
    total : counterReducer,
    productList: productReducer
});

export default allReducer;
