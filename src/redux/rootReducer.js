import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";

import shopReducer from "./Shopping/shopping-reducer"

const rootReducer = combineReducers({
    shop: shopReducer,
    auth: authReducer,
});

export default rootReducer