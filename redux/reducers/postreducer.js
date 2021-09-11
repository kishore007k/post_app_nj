import ActionTypes from "../constants";

const INITIAL_STATE = {
	posts: {},
};

const PostReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.CREATE_POST:
			return { ...state, posts: payload.data };

		default:
			return state;
	}
};

export default PostReducer;
