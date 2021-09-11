import ActionTypes from "../constants";

const INITIAL_STATE = {
	post: {},
	posts: [],
};

const PostReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.CREATE_POST:
			return { ...state, post: payload.data };

		case ActionTypes.GET_ALL_POSTS:
			return { ...state, posts: payload.data };

		default:
			return state;
	}
};

export default PostReducer;
