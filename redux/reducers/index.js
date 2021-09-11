import { combineReducers } from "redux";
import userAuthReducer from "./userReducer";
import PostReducer from "./postreducer";

const reducers = combineReducers({
	user: userAuthReducer,
	post: PostReducer,
});

export default reducers;
