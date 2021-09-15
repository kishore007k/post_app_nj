import ActionTypes from "../constants";

export const userSignUp = (data) => {
	return {
		type: ActionTypes.USER_SIGN_UP,
		payload: data,
	};
};

export const userSignIn = (data) => {
	return {
		type: ActionTypes.USER_SIGN_IN,
		payload: data,
	};
};

export const createPost = (data) => {
	return {
		type: ActionTypes.CREATE_POST,
		payload: data,
	};
};

export const updatePost = (data) => {
	return {
		type: ActionTypes.UPDATE_POST,
		payload: data,
	};
};

export const getAllPosts = (data) => {
	return {
		type: ActionTypes.GET_ALL_POSTS,
		payload: data,
	};
};

export const createCategory = (data) => {
	return {
		type: ActionTypes.CREATE_CATEGORY,
		payload: data,
	};
};

export const createTag = (data) => {
	return {
		type: ActionTypes.CREATE_TAG,
		payload: data,
	};
};

export const getAllCategories = (data) => {
	return {
		type: ActionTypes.GET_ALL_CATEGORIES,
		payload: data,
	};
};

export const getAllTags = (data) => {
	return {
		type: ActionTypes.GET_ALL_TAGS,
		payload: data,
	};
};

export const getCategory = (data) => {
	return {
		type: ActionTypes.GET_CATEGORY,
		payload: data,
	};
};

export const getTag = (data) => {
	return {
		type: ActionTypes.GET_TAG,
		payload: data,
	};
};

export const deleteCategory = () => {
	return {
		type: ActionTypes.DELETE_CATEGORY,
	};
};

export const deleteTag = () => {
	return {
		type: ActionTypes.DELETE_TAG,
	};
};

export const deletePost = () => {
	return {
		type: ActionTypes.DELETE_POST,
	};
};
