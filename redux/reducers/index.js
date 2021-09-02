import { combineReducers } from "redux";
import userAuthReducer from "./userReducer";

const reducers = combineReducers({
	user: userAuthReducer,
});

export default reducers;
