import { combineReducers } from "redux";
import userAuthReducer from "./userReducer";
import PostReducer from "./postReducer";
import CategoryReducer from "./categoryReducer";
import TagReducer from "./tagReducer";

const reducers = combineReducers({
	user: userAuthReducer,
	post: PostReducer,
	category: CategoryReducer,
	tag: TagReducer,
});

export default reducers;
