import ActionTypes from "../constants";

const INITIAL_STATE = {
	tag: {},
	tags: [],
	message: "",
};

const TagReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.CREATE_TAG:
			return { ...state, tag: payload.data };

		case ActionTypes.GET_ALL_TAGS:
			return { ...state, tags: payload.data };

		case ActionTypes.GET_TAG:
			return { ...state, tag: payload.data };

		case ActionTypes.DELETE_TAG:
			return { ...state, message: "Successfully Deleted the Tag!" };

		default:
			return state;
	}
};

export default TagReducer;
