import ActionTypes from "../constants";

const INITIAL_STATE = {
	category: {},
	categories: [],
	message: "",
};

const CategoryReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.CREATE_CATEGORY:
			return { ...state, category: payload.data };

		case ActionTypes.GET_ALL_CATEGORIES:
			return { ...state, categories: payload.data };

		case ActionTypes.GET_CATEGORY:
			return { ...state, category: payload.data };

		case ActionTypes.DELETE_CATEGORY:
			return { ...state, message: "Successfully Deleted the Category!" };

		default:
			return state;
	}
};

export default CategoryReducer;
